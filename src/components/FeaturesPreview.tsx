import { motion, AnimatePresence } from 'framer-motion';

function FeaturesPreview() {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
}

export default FeaturesPreview;