import { motion, AnimatePresence } from 'framer-motion';
import LoadingState from './LoadingState';

function LoadingSection() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-16"
      >
        <LoadingState />
      </motion.section>
    </AnimatePresence>
  );
}

export default LoadingSection;