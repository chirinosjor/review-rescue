import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

function FetchErrorMessage() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-16"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-center bg-red-100">
          <div className="flex items-center justify-center h-12 w-12 rounded-full  text-red-800">
            <AlertCircle className="h-6 w-6 text-red-600" strokeWidth={1} />
          </div>
          <div className="text-center text-sm text-red-700">
            <p>Error al analizar la reseñas, intenta nuevamente más tarde.</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default FetchErrorMessage;