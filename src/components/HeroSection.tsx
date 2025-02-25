import { Button } from './Button';
import { SearchBar } from './SearchBar';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TrustIndicators } from './TrustIndicators';
import FeaturesPreview from './FeaturesPreview';

interface HeroSectionProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isAnalyzing: boolean;
  handleAnalyze: () => void;
}

function HeroSection({ searchValue, setSearchValue, isAnalyzing, handleAnalyze }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl text-center"
      >
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Transforma las Reseñas Negativas en{' '}
          <span className="text-primary">Oportunidades de Crecimiento</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Analiza tus reseñas de Google Maps con IA para descubrir información
          valiosa y convierte los comentarios de los clientes en tu ventaja
          competitiva.
        </p>

        <div className="mt-12 flex flex-col items-center gap-8">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <Button className="group" onClick={handleAnalyze} disabled={isAnalyzing}>
            Analizar Reseñas
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
      <div className="mt-12 flex flex-col items-center">
        <TrustIndicators />
        <FeaturesPreview />
      </div>
    </section>
  );
}

export default HeroSection;