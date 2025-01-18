import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'División de Baño Premium',
    description: 'Aluminio anodizado con vidrio templado de 8mm',
    price: 'Desde $499.99',
    image: 'public/img/sup.jpg'
  },
  {
    id: 2,
    name: 'Ventanas Corredizas',
    description: 'Sistema de ventanas moderno y eficiente',
    price: 'Desde $199.99',
    image: 'public/img/venta.jpg'
  },
  {
    id: 3,
    name: 'Puertas de Ducha',
    description: 'Diseños elegantes con acabado premium',
    price: 'Desde $399.99',
    image: 'public/img/1.jpg'
  },
  {
    id: 4,
    name: 'Marquesinas y fachadas',
    description: 'Soluciones para espacios comerciales',
    price: 'Desde $499.99',
    image: 'public/img/3.webp'
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const phoneNumber = '+1234567890'; // Reemplazar con número real

  const handleWhatsAppClick = () => {
    const message = selectedProduct 
      ? `¡Hola! Me interesa ${selectedProduct.name} (${selectedProduct.price})`
      : "¡Hola! Me interesan sus productos de aluminio";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Nuestros Productos</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Soluciones en aluminio de alta calidad para tu hogar u oficina
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{product.price}</span>
                  <button 
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón flotante de WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-24 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Botones de redes sociales */}
        <div className="fixed right-8 flex flex-col gap-4 z-50">
          <a
            href="https://www.facebook.com/people/Alfa-Aluminios/61557214996848/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Síguenos en Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/alfa_aluminium_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Síguenos en Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@alfaaluminios?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="Síguenos en TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        {/* Botón de ubicación */}
        <a
          href="https://maps.google.com/?q=TuUbicacion"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors z-50"
          aria-label="Ver ubicación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </a>

        {/* Modal de consulta */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Consultar Producto</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{selectedProduct.name}</h4>
                    <p className="text-blue-600">{selectedProduct.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Para consultar sobre este producto, haz clic en el botón de abajo para contactarnos por WhatsApp. 
                  Nuestro equipo te atenderá con gusto.
                </p>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}