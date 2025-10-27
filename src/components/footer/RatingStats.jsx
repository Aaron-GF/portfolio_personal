import { useFingerprint } from "@/hooks/useFingerprint";
import { useRatings } from "@/hooks/useRatings";
import { StarIcon } from "@/components/ui/StarIcon";

export default function RatingStats() {
  const fingerprint = useFingerprint();
  const { averageRating, totalVotes, ratingsSummary } = useRatings(fingerprint);

  if (totalVotes === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 w-80 text-center">
        <p className="text-primary">Aún no hay valoraciones</p>
        <p className="text-sm">¡Sé el primero en votar!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-80">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= Math.round(averageRating)} />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{averageRating} de 5</span>
          <span className="text-ring">
            {totalVotes} {totalVotes === 1 ? "valoración" : "valoraciones"}
          </span>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        {ratingsSummary.map(({ label, percentage, count }, index) => (
          <div key={index} className="flex items-center">
            <span className="w-24 text-sm">{label}</span>
            <div className="flex-1 h-2.5 mx-4 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-12 text-center text-sm">{percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
