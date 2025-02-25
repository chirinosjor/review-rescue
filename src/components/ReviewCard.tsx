import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewText } from '../App';
interface ReviewCardProps {
  review: ReviewText;
  isBlurred?: boolean;
}

export function ReviewCard({ review, isBlurred = false }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg bg-white p-6 shadow-card ${isBlurred ? 'blur-sm pointer-events-none' : ''
        }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <div className="flex items-center">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-yellow-400 text-yellow-400"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
      {review.text?.length > 0 ?
        <p className="text-gray-700">{review.text}</p>
        : null}
      {review.reasons?.length > 0 ? (
        <div className="mt-4 rounded-md bg-yellow-700/10 p-4">
          <p className="text-sm font-medium text-yellow-700">
            <span className='block'>Motivos:</span> {review.reasons.map((reason, i) => (
              <span key={i} className='block'>- {reason}</span>
            ))}
          </p>
        </div>
      ) : null}
      {review?.improvements?.length > 0 ? (
        <div className="mt-4 rounded-md bg-success/10 p-4">
          <p className="text-sm font-medium text-success">
            <span className='block'>Sugerencia de IA:</span> {review.improvements.map((improvement, i) => (
              <span key={i} className='block'>- {improvement}</span>
            ))}
          </p>
        </div>
      ) : <div className="mt-4 rounded-md bg-gray-700/10 p-4">
        <p className="text-sm font-medium text-gray-700">
          El usuario no dio información de para analizar
        </p>
      </div>}
    </motion.div>
  );
}