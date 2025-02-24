import { Star, Users, Zap } from 'lucide-react';

export function TrustIndicators() {
  return (
    <div className="flex items-center gap-8 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        <span>Más de 500 negocios analizados</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-yellow-400" />
        <span>Calificación 4.8/5</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <span>Información instantánea</span>
      </div>
    </div>
  );
}