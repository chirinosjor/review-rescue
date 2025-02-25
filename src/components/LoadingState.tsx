import { useEffect, useState } from "react";

const loadingPhrases = [
  "Pensando en la mejor estrategia... 🤖💡",
  "Analizando cada detalle con precisión... 🔍✨",
  "Desbloqueando nuevas oportunidades... 🔑✨",
  "Afinando recomendaciones inteligentes... 📊🚀",
  "Preparando resultados sorprendentes... 🎯🔥"
];


function LoadingState() {
  const [currentPhrase, setCurrentPhrase] = useState(loadingPhrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => {
        const currentIndex = loadingPhrases.indexOf(prev);
        return loadingPhrases[(currentIndex + 1) % loadingPhrases.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
      <div className="text-white text-2xl font-bold animate-pulse">
        {currentPhrase}
      </div>
      <div className="mt-4 animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full"></div>
    </div>
  );
}

export default LoadingState;
