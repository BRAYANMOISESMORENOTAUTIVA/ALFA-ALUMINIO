import React from 'react';
import { Shield, Ruler, Wrench, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    description: 'Aluminio de primera calidad con los mejores acabados'
  },
  {
    icon: Ruler,
    title: 'Medidas Exactas',
    description: 'Fabricación a medida para cada espacio'
  },
  {
    icon: Wrench,
    title: 'Instalación Profesional',
    description: 'Equipo técnico especializado y certificado'
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    description: 'Cumplimos con los tiempos acordados'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">¿Por Qué Elegirnos?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por ofrecer soluciones de calidad y un servicio excepcional
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}