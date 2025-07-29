import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573027447785?text=¡Hola! Me gustaría hacer un pedido', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://g.co/kgs/jpZ3P7h', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+57 302 744 7785",
      action: handleWhatsAppClick
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Mosquera, Cundinamarca",
      action: handleLocationClick
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: "Lun - Dom: 11:00 AM - 11:00 PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para servirte. Haz tu pedido o visítanos en nuestro restaurante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={item.action}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 ${
                  item.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-yellow-400 bg-yellow-400/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700"
            >
              <h3 className="text-white font-bold text-lg mb-4">Síguenos en Redes</h3>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-black rounded-full"></div>
                <div className="absolute top-12 right-8 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-6 h-6 border-2 border-black rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-black/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <img 
                  src="/logo-fastfood.png" 
                  alt="El Diamante Logo" 
                  className="w-20 h-20 mx-auto mb-6"
                />
                
                <h3 className="text-3xl font-black text-black mb-4">
                  ¡Ordena Ahora!
                </h3>
                
                <p className="text-black/80 mb-6 text-lg">
                  Haz tu pedido por WhatsApp y disfruta de nuestros sabores únicos en la comodidad de tu hogar
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-3 mx-auto shadow-2xl hover:bg-gray-800 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chatear por WhatsApp</span>
                </motion.button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500/30 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;