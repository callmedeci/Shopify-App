import { Star } from 'lucide-react';

function Stars({ rating }: { rating: number }) {
  const starsArray = Array.from({ length: Math.round(rating) });

  return (
    <div className='flex gap-0.5'>
      {starsArray.map((_, i) => (
        <Star key={i} className='size-4 text-indigo-600 fill-indigo-400' />
      ))}
    </div>
  );
}

export default Stars;
