import { useState } from "react";

import { useFingerprint } from "@/hooks/useFingerprint";
import { useRatings } from "@/hooks/useRatings";

import { StarIcon } from "@/components/ui/StarIcon";
import { Spinner } from "@/components/ui/SendBtn";

export default function Ratings() {
  const fingerprint = useFingerprint();
  const { rating, hasVoted, isLoading, vote } = useRatings(fingerprint);
  const [hover, setHover] = useState(0);

  return (
    <section
      id="Ratings"
      className="flex flex-col justify-center items-center w-full h-100"
    >
      <div className="flex flex-col items-center justify-center gap-3 bg-input shadow-md w-full h-50">
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <h2 className="text-xl font-bold mb-4">
              {hasVoted
                ? "¡Gracias por tu valoración!"
                : "¿Cómo valoras este portfolio?"}
            </h2>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  title={`Valorar con ${star} estrellas`}
                  aria-label={`Valorar con ${star} estrellas`}
                  onClick={() => vote(star)}
                  onMouseEnter={() => !hasVoted && setHover(star)}
                  onMouseLeave={() => !hasVoted && setHover(0)}
                  disabled={hasVoted || isLoading}
                >
                  <StarIcon
                    filled={star <= (hover || rating)}
                    interactive={!hasVoted}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm">
              {hasVoted && rating
                ? `Has valorado con ${rating} ${
                    rating === 1 ? "estrella" : "estrellas"
                  }`
                : !rating && hasVoted
                ? "Ya has valorado anteriormente"
                : "Selecciona una estrella para votar"}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
