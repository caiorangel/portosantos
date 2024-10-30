import React from 'react';
import { MessageCircleMore, Phone } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

export default function Hero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] w-full py-16 md:py-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.7] md:scale-[1.5]"
        >
          <source src="https://iarazap.com/navio.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Estacionamento Seguro no Porto de Santos
              </h1>
              <p className="text-lg mb-6 text-blue-100">
                Seu veículo protegido a apenas 8 minutos do Terminal, com transfer exclusivo e seguro Porto Seguro.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="https://wa.me/5513991260211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition w-full sm:w-auto"
                >
                  <MessageCircleMore className="shrink-0" size={20} />
                  <span>Reservar via WhatsApp</span>
                </a>
                <a
                  href="tel:+551321389144"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-gray-100 transition w-full sm:w-auto"
                >
                  <Phone className="shrink-0" size={20} />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}