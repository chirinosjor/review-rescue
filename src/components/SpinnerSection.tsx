import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from '../components/LoadingSpinner';

function SpinnerSection() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-16"
      >
        <LoadingSpinner />
      </motion.section>
    </AnimatePresence>
  );
}

export default SpinnerSection;