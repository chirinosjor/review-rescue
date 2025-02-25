import { motion, AnimatePresence } from 'framer-motion';
import { ReviewCard } from './ReviewCard';
import { Lock } from 'lucide-react';
import { Button } from './Button';
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
              isBlurred={index >= 2}
            />
          ))}
          {/* Unlock CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sticky bottom-8 mt-8 text-center"
          >
            <div className="inline-block rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Lock className="h-5 w-5 text-primary" />
                <span>Desbloquea el análisis completo</span>
              </div>
              <Button className="mt-4">
                Pagar para desbloquear
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default ReviewsSection;