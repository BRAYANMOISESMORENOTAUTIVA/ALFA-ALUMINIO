import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';



export default function Contact() {
  const phoneNumber = '+1234567890'; // Reemplazar con número real

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesan sus productos de aluminio";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales y mantente al día con nuestros últimos proyectos
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/people/Alfa-Aluminios/61557214996848/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition-colors flex flex-col items-center gap-2"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/alfa_aluminium_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6 rounded-xl shadow-lg hover:opacity-90 transition-opacity flex flex-col items-center gap-2"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@alfaaluminios?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-6 rounded-xl shadow-lg hover:bg-gray-800 transition-colors flex flex-col items-center gap-2"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>

        {/* Botones flotantes */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-24 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        <a
          href="https://maps.app.goo.gl/NsZUypPf2E3yRQeN6"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors z-50"
          aria-label="Ver ubicación"
        >
          <MapPin className="w-6 h-6" />
        </a>
      </div>
      <div className="mt-8">
      <iframe
  title="Ubicación"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127259.77517314379!2d-74.3073563!3d4.6176318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85298ab00143%3A0x71c23f7aa1b6fa77!2sAlfa%20aluminios!5e0!3m2!1ses-419!2sco!4v1731215348461!5m2!1ses-419!2sco"
  width="600"
  height="450"
  allowFullScreen
  loading="lazy"
  className="w-full h-[400px] object-cover rounded-2xl"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>
    </section>
    
  );
}