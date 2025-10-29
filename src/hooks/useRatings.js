import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const initialRatingSummary = [
  { label: "5 estrellas", percentage: 0, count: 0 },
  { label: "4 estrellas", percentage: 0, count: 0 },
  { label: "3 estrellas", percentage: 0, count: 0 },
  { label: "2 estrellas", percentage: 0, count: 0 },
  { label: "1 estrella", percentage: 0, count: 0 },
];

export function useRatings(fingerprint) {
  const [rating, setRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [ratingsSummary, setRatingsSummary] = useState(initialRatingSummary);

  useEffect(() => {
    if (!fingerprint) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    async function fetchData() {
      try {
        const personalVotePromise = supabase
          .from("ratings")
          .select("rating")
          .eq("fingerprint", fingerprint)
          .maybeSingle();

        const ratingsStatsPromise = supabase.from("ratings").select("rating");

        const [{ data: personalData }, { data: ratings }] = await Promise.all([
          personalVotePromise,
          ratingsStatsPromise,
        ]);

        if (personalData) {
          setHasVoted(true);
          setRating(personalData.rating);
        } else {
          setHasVoted(false);
          setRating(0);
        }

        if (ratings && ratings.length > 0) {
          const total = ratings.reduce((sum, item) => sum + item.rating, 0);
          const avg = total / ratings.length;
          setAverageRating(avg.toFixed(1));
          setTotalVotes(ratings.length);
          const summary = [5, 4, 3, 2, 1].map((star) => {
            const count = ratings.filter((r) => r.rating === star).length;
            const percentage = Math.round((count / ratings.length) * 100) || 0;
            return {
              label: `${star} ${star === 1 ? "estrella" : "estrellas"}`,
              percentage,
              count,
            };
          });
          setRatingsSummary(summary);
        } else {
          setAverageRating(0);
          setTotalVotes(0);
          setRatingsSummary(initialRatingSummary);
        }
      } catch (error) {
        console.error("Error fetching ratings", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [fingerprint]);

  async function vote(newRating) {
    if (hasVoted || isLoading || !fingerprint) return false;
    setIsLoading(true);
    const { error } = await supabase.from("ratings").insert({
      fingerprint,
      rating: newRating,
      created_at: new Date().toISOString(),
    });
    if (error) {
      setIsLoading(false);
      return false;
    }
    setRating(newRating);
    setHasVoted(true);

    // Actualiza estados sin recargar todo
    setAverageRating((prevAvg) =>
      ((prevAvg * totalVotes + newRating) / (totalVotes + 1)).toFixed(1)
    );
    setTotalVotes((prev) => prev + 1);
    setRatingsSummary((prevSummary) => {
      return prevSummary.map((item) => {
        if (item.label.startsWith(newRating.toString())) {
          return {
            ...item,
            count: item.count + 1,
            percentage: Math.round(((item.count + 1) / (totalVotes + 1)) * 100),
          };
        }
        return {
          ...item,
          percentage: Math.round((item.count / (totalVotes + 1)) * 100),
        };
      });
    });

    setIsLoading(false);
    return true;
  }

  return {
    rating,
    hasVoted,
    isLoading,
    averageRating,
    totalVotes,
    ratingsSummary,
    vote,
  };
}
