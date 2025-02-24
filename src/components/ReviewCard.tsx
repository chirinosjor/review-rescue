import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: {
    author: string;
    rating: number;
    text: string;
    date: string;
    suggestion?: string;
  };
  isBlurred?: boolean;
}

export function ReviewCard({ review, isBlurred = false }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg bg-white p-6 shadow-card ${
        isBlurred ? 'blur-sm pointer-events-none' : ''
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{review.author}</h3>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <div className="flex items-center">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700">{review.text}</p>
      {review.suggestion && (
        <div className="mt-4 rounded-md bg-success/10 p-4">
          <p className="text-sm font-medium text-success">
            Sugerencia de IA: {review.suggestion}
          </p>
        </div>
      )}
    </motion.div>
  );
}