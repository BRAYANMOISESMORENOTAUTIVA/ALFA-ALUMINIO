import React from 'react';
import { Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    type: 'video',
    thumbnail: 'public/espejos.jpg',
    videoUrl: 'public/espejos.mp4',
    title: 'Puertas y todo tipo de marco',
    description: 'Instalación en casas, conjuntos cerrados y empresas'
  },
  {
    id: 2,
    type: 'video',
    thumbnail: 'public/loger.svg',
    videoUrl: 'public/loger.mp4',
    title: 'Proceso de Instalación',
    description: 'Paso a paso de nuestro trabajo'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: 'public/vitri.jpg',
    videoUrl: 'public/vitri.mp4',
    title: 'Proyecto Comercial',
    description: 'Mamparas para oficina corporativa'
  }
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Nuestros Trabajos</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos más destacados
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.type === 'video' && (
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}