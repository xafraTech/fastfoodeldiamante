import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573027447785?text=¡Hola! Me gustaría hacer un pedido', '_blank');
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="/logo-fastfood.png" 
                alt="El Diamante Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">El Diamante</h3>
                <p className="text-yellow-400 text-sm">Fast Food Mosquera</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Los sabores más auténticos de Mosquera. Calidad que brilla como un diamante.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-bold mb-4">Información de Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">+57 302 744 7785</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">Mosquera, Cundinamarca</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">Lun - Dom: 11:00 AM - 11:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-bold mb-4">Ordena Ahora</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold flex items-center space-x-2 mx-auto md:mx-0 hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.button>
            <p className="text-gray-400 text-sm mt-3">
              Haz tu pedido fácil y rápido por WhatsApp
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 El Diamante Fast Food. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>en Mosquera</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;