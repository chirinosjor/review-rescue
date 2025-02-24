import { useState } from 'react';
import { Button } from './components/Button';
import { SearchBar } from './components/SearchBar';
import { TrustIndicators } from './components/TrustIndicators';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ReviewCard } from './components/ReviewCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

const mockReviews = [
  {
    author: 'María González',
    rating: 2,
    text: 'La comida estaba fría cuando llegó y el servicio a domicilio tardó más de lo prometido.',
    date: '15 de marzo, 2024',
    suggestion: 'Implementar un sistema de seguimiento de pedidos en tiempo real y mejorar la logística de entrega.',
  },
  {
    author: 'Carlos Rodríguez',
    rating: 1,
    text: 'Pésima atención al cliente. El mesero fue muy descortés y la comida no justifica el precio.',
    date: '12 de marzo, 2024',
    suggestion: 'Realizar capacitación en servicio al cliente y revisar la estructura de precios.',
  },
  {
    author: 'Ana Martínez',
    rating: 2,
    text: 'El local estaba sucio y la música demasiado alta. No volveré.',
    date: '10 de marzo, 2024',
  },
  {
    author: 'Pedro Sánchez',
    rating: 1,
    text: 'Esperé más de 45 minutos por mi pedido y cuando llegó estaba incompleto.',
    date: '8 de marzo, 2024',
  },
  {
    author: 'Laura Torres',
    rating: 2,
    text: 'La calidad ha bajado mucho últimamente. Los ingredientes no parecen frescos.',
    date: '5 de marzo, 2024',
  },
];

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAnalyzing(false);
    setShowReviews(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            <SearchBar />
            <Button className="group" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analizando...' : 'Analizar Reseñas'}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <TrustIndicators />
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2">
          <div className="h-[800px] w-[1200px] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        </div>
      </section>

      {/* Reviews Section */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-16"
          >
            <LoadingSpinner />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReviews && !isAnalyzing && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="grid gap-6">
              {mockReviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  review={review}
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
        )}
      </AnimatePresence>

      {/* Features Preview */}
      <AnimatePresence>
        {!showReviews && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-32 px-4 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-3">
                {[
                  {
                    title: 'Análisis Impulsado por IA',
                    description:
                      'Obtén información detallada y recomendaciones accionables de tus reseñas.',
                    image:
                      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: 'Resultados Instantáneos',
                    description:
                      'Visualiza tu análisis en segundos, sin esperas ni configuraciones complejas.',
                    image:
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: 'Oportunidades de Crecimiento',
                    description:
                      'Transforma las críticas en pasos concretos para mejorar tu negocio.',
                    image:
                      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="card-hover rounded-2xl bg-white p-6 shadow-card"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mb-6 h-48 w-full rounded-lg object-cover"
                    />
                    <h3 className="font-display text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;