import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://iarazap.com/estacionamentoportosantos.png" 
              alt="Estacionamento Porto Santos" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#sobre" className="text-gray-700 hover:text-blue-900">Sobre</a>
            <a href="/#pacotes" className="text-gray-700 hover:text-blue-900">Pacotes</a>
            <a href="/#diferenciais" className="text-gray-700 hover:text-blue-900">Diferenciais</a>
            <a href="/#depoimentos" className="text-gray-700 hover:text-blue-900">Depoimentos</a>
            <a href="/#faq" className="text-gray-700 hover:text-blue-900">FAQ</a>
            <a href="/#contato" className="text-gray-700 hover:text-blue-900">Contato</a>
            
            <a href="tel:+551321389144" 
               className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition">
              <Phone size={18} />
              <span>13 2138-9144</span>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col p-4 space-y-4">
              <a href="/#sobre" className="text-gray-700">Sobre</a>
              <a href="/#pacotes" className="text-gray-700">Pacotes</a>
              <a href="/#diferenciais" className="text-gray-700">Diferenciais</a>
              <a href="/#depoimentos" className="text-gray-700">Depoimentos</a>
              <a href="/#faq" className="text-gray-700">FAQ</a>
              <a href="/#contato" className="text-gray-700">Contato</a>
              <a href="tel:+551321389144" 
                 className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full">
                <Phone size={18} />
                <span>13 2138-9144</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}