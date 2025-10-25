import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const STAR_PATH = "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

function StarIcon({ filled }) {
  const baseClass = "size-5";
  const colorClass = filled ? "text-primary" : "text-border";

  return (
    <svg
      className={`${baseClass} ${colorClass}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

export default function RatingStats() {
  const [averageRating, setAverageRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [ratingsSummary, setRatingsSummary] = useState([
    { label: "5 estrellas", percentage: 0, count: 0 },
    { label: "4 estrellas", percentage: 0, count: 0 },
    { label: "3 estrellas", percentage: 0, count: 0 },
    { label: "2 estrellas", percentage: 0, count: 0 },
    { label: "1 estrella", percentage: 0, count: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const { data: ratings, error } = await supabase
        .from('ratings')
        .select('rating');

      if (error) throw error;

      if (ratings && ratings.length > 0) {
        // Calcular promedio
        const total = ratings.reduce((sum, item) => sum + item.rating, 0);
        const avg = total / ratings.length;
        setAverageRating(avg.toFixed(1));
        setTotalVotes(ratings.length);

        // Calcular distribución de estrellas
        const summary = [5, 4, 3, 2, 1].map(star => {
          const count = ratings.filter(r => Math.round(r.rating) === star).length;
          const percentage = Math.round((count / ratings.length) * 100) || 0;
          return {
            label: `${star} ${star === 1 ? 'estrella' : 'estrellas'}`,
            percentage,
            count
          };
        });
        
        setRatingsSummary(summary);
      }
    } catch (error) {
      console.error('Error al cargar las valoraciones:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4 w-80">
        <div className="animate-pulse text-gray-500">Cargando estadísticas...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-80">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon 
              key={star} 
              filled={star <= Math.round(averageRating)} 
            />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{averageRating} de 5</span>
          <span className="text-ring">
            {totalVotes} {totalVotes === 1 ? 'valoración' : 'valoraciones'}
          </span>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        {ratingsSummary.map(({ label, percentage, count }, index) => (
          <div key={index} className="flex items-center">
            <span className="w-24 text-sm">{label}</span>
            <div className="flex-1 h-2.5 mx-4 bg-border rounded-full drop-shadow-md">
              <div 
              className="h-5 bg-primary rounded-sm"
                style={{ width: `${percentage}%` }}
              />
            </div>
          <span className="w-10 text-center">{percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
