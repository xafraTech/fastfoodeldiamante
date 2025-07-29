import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573027447785?text=¡Hola! Me gustaría hacer un pedido', '_blank');
  };

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Menú', href: '#menu' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/logo-fastfood.png" 
              alt="El Diamante Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="text-white">
              <h1 className="text-xl font-bold">El Diamante</h1>
              <p className="text-xs text-yellow-400">Fast Food Mosquera</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Ordenar Ya</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-yellow-400 py-3 border-b border-gray-700 last:border-b-0"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-full font-bold flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Ordenar Ya</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;