import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center p-8"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </motion.div>
  );
}