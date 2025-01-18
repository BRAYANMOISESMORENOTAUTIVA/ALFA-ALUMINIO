import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'public/img/uno.jpg',
    alt: 'Modernas  instalaciones'
  },
  {
    url: 'public/img/dos.jpg',
    alt: 'Elegante diseño del vidrio'
  },
  {
    url: 'public/img/tres.jpg',
    alt: 'Soluciones de  lta  calidad'
  },
  {
    url: 'public/img/cuatro.jpg',
    alt: 'paneles de cristal'
  },
  {
    url: 'public/img/cuatro.jpg',
    alt: 'Designer glass work'
  }
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforma tus espacios 
              <span className="text-blue-600"> con calidad</span> ALFA ALUMINIOS
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Descubre y innova nuevos espacios con calidad, manejamos todo tipo de vidriería, diseñamos a tu comodidad. Tu opinión es importante, además te asesoramos en el manejo de espacios. Instalaciones oportunas, limpias y versátiles.            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                Mira nuestros  productos
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
              >
                Contactanos
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 rounded-2xl shadow-2xl"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-full snap-center snap-always"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: index * scrollRef.current.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}