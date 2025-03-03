import { motion, AnimatePresence } from 'framer-motion';
import { ReviewCard } from './ReviewCard';
import { ReviewText } from '../lib/types';

interface ReviewsSectionProps {
  formattedReviews: (ReviewText | null)[];
}

function ReviewsSection({ formattedReviews }: ReviewsSectionProps) {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6">
          <h1 className="text-2xl font-bold">
            {formattedReviews.length} resultados
          </h1>
          {formattedReviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review as ReviewText}
            />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default ReviewsSection;