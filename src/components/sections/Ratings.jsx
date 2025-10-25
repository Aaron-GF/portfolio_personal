import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const STAR_PATH = "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

function StarIcon({ filled, onClick, interactive = false }) {
  const baseClass = `size-5 ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`;
  const colorClass = filled ? "text-yellow-400" : "text-gray-300";

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

  useEffect(() => {
    checkIfVoted();
  }, []);

  const checkIfVoted = async () => {
    const userId = localStorage.getItem('userId') || Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
    
    const { data } = await supabase
      .from('ratings')
      .select('rating')
      .eq('user_id', userId)
      .single();

    if (data) {
      setHasVoted(true);
      setRating(data.rating);
    }
    setIsLoading(false);
  };

  const handleRating = async (selectedRating) => {
    if (hasVoted || isLoading) return;
    
    setIsLoading(true);
    const userId = localStorage.getItem('userId');
    
    const { error } = await supabase
      .from('ratings')
      .upsert(
        { 
          user_id: userId, 
          rating: selectedRating,
          created_at: new Date().toISOString()
        },
        { onConflict: 'user_id' }
      );

    if (!error) {
      setRating(selectedRating);
      setHasVoted(true);
    }
    
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {hasVoted ? '¡Gracias por tu valoración!' : '¿Cómo valoras mi trabajo?'}
      </h2>
      
      <div className="flex items-center gap-1 mb-2">
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
      
      <p className="text-sm text-gray-600">
        {hasVoted 
          ? `Has valorado con ${rating} ${rating === 1 ? 'estrella' : 'estrellas'}`
          : 'Haz clic en una estrella para votar'}
      </p>
    </div>
  );
}