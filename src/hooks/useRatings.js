import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export function useRatings(fingerprint) {
  const [rating, setRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [ratingsSummary, setRatingsSummary] = useState([
    { label: "5 estrellas", percentage: 0, count: 0 },
    { label: "4 estrellas", percentage: 0, count: 0 },
    { label: "3 estrellas", percentage: 0, count: 0 },
    { label: "2 estrellas", percentage: 0, count: 0 },
    { label: "1 estrella", percentage: 0, count: 0 },
  ]);

  useEffect(() => {
    if (!fingerprint) return;
    async function fetchPersonalVote() {
      const { data } = await supabase
        .from("ratings")
        .select("rating")
        .eq("fingerprint", fingerprint)
        .maybeSingle();
      if (data) {
        setHasVoted(true);
        setRating(data.rating);
      } else {
        setHasVoted(false);
        setRating(0);
      }
      setIsLoading(false);
    }
    fetchPersonalVote();
  }, [fingerprint]);

  const fetchRatingsStats = useCallback(async () => {
    const { data: ratings } = await supabase.from("ratings").select("rating");
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
      setRatingsSummary([
        { label: "5 estrellas", percentage: 0, count: 0 },
        { label: "4 estrellas", percentage: 0, count: 0 },
        { label: "3 estrellas", percentage: 0, count: 0 },
        { label: "2 estrellas", percentage: 0, count: 0 },
        { label: "1 estrella", percentage: 0, count: 0 },
      ]);
    }
  }, []);

  useEffect(() => {
    fetchRatingsStats();
  }, [fetchRatingsStats]);

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
    setIsLoading(false);
    fetchRatingsStats();
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
