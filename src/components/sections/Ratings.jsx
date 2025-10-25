import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { Spinner } from "@/components/ui/SendBtn";

const STAR_PATH =
  "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

function StarIcon({ filled, onClick, interactive = false }) {
  const baseClass = `size-5 ${
    interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""
  }`;
  const colorClass = filled ? "text-primary" : "text-ring";

  return (
    <svg
      className={`${baseClass} ${colorClass}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
      onClick={onClick}
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

export default function Ratings() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fingerprint, setFingerprint] = useState(null);

  // --------- Sincronización del voto entre localStorage y Supabase ---------
  useEffect(() => {
    async function syncVoto() {
      // Obtener fingerprint (cachear en localStorage para rendimiento)
      let visitorId = localStorage.getItem("fp");
      if (!visitorId) {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        visitorId = result.visitorId;
        localStorage.setItem("fp", visitorId);
      }
      setFingerprint(visitorId);

      // SIEMPRE consulta la BD: recupera el voto actual por fingerprint
      const { data } = await supabase
        .from("ratings")
        .select("rating")
        .eq("fingerprint", visitorId)
        .maybeSingle();

      if (data) {
        setHasVoted(true);
        setRating(data.rating);
        localStorage.setItem("hasVoted", "true");
      } else {
        setHasVoted(false);
        setRating(0);
        localStorage.removeItem("hasVoted");
      }
      setIsLoading(false);
    }
    syncVoto();
  }, []);

  const handleRating = async (selectedRating) => {
    if (hasVoted || isLoading || !fingerprint) return;

    setIsLoading(true);

    try {
      const { error } = await supabase.from("ratings").insert({
        fingerprint,
        rating: selectedRating,
        created_at: new Date().toISOString(),
      });

      if (error) {
        if (error.code === "23505") {
          alert("Ya has votado anteriormente");
          setHasVoted(true);
          localStorage.setItem("hasVoted", "true");
          return;
        }
        throw error;
      }

      setRating(selectedRating);
      setHasVoted(true);
      localStorage.setItem("hasVoted", "true");
    } catch (error) {
      console.error("Error al guardar valoración:", error);
      alert("Hubo un error. Por favor intentalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="Ratings" className="flex flex-col justify-center items-center w-full h-100">
      <div className="flex flex-col items-center justify-center gap-2 bg-input shadow-md w-full h-50">
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
                  onClick={() => handleRating(star)}
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
                ? `Has valorado con ${rating} ${rating === 1 ? "estrella" : "estrellas"}`
                : !rating && hasVoted
                ? "Ya has valorado anteriormente"
                : "Haz clic en una estrella para votar"}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
