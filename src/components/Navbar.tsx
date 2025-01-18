import React from 'react';
import { Factory, Menu, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
                  {/* BIMG  LOGO */}
            <a href="/" className="flex items-center space-x-2">
            <img className="h-12 w-auto" src="/pactive.svg"alt="Alfa Aluminios" />
              <span className="text-xl font-semibold text-gray-900">ALFA ALUMINIOS</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Productos</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
          
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-100">
            <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Productos</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contacto</a>
           
          </div>
        </div>
      )}
    </nav>
  );
}