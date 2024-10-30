import React from 'react';
import { Clock, Car, Shield } from 'lucide-react';

export default function Features() {
  return (
    <section id="diferenciais" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-center">
              <Clock className="w-12 h-12 text-blue-900 mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Localização Privilegiada</h3>
            <p className="text-gray-600 text-center">A apenas 8 minutos do Terminal do Porto de Santos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-center">
              <Car className="w-12 h-12 text-blue-900 mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Transfer Exclusivo</h3>
            <p className="text-gray-600 text-center">Serviço de transfer particular incluído em todos os pacotes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-center">
              <Shield className="w-12 h-12 text-blue-900 mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Segurança 24h</h3>
            <p className="text-gray-600 text-center">Monitoramento 24h e seguro Porto Seguro incluso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}