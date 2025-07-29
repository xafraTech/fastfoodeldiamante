import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573027447785?text=¡Hola! Me gustaría hacer un pedido', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Delicious burgers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/logo-fastfood.png" 
            alt="El Diamante Logo" 
            className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            El Diamante
          </span>
          <br />
          <span className="text-3xl md:text-5xl font-light">Fast Food</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Los sabores más auténticos de Mosquera. Hamburguesas jugosas, pizzas artesanales y mucho más.
          <span className="block mt-2 text-yellow-400 font-semibold">¡Calidad que brilla como un diamante!</span>
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-3 shadow-2xl hover:shadow-yellow-400/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Ordenar por WhatsApp</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all"
          >
            Ver Menú
          </motion.a>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Ubicación</h3>
            <p className="text-gray-300 text-sm">Mosquera, Cundinamarca</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Horarios</h3>
            <p className="text-gray-300 text-sm">Lun - Dom: 11:00 AM - 11:00 PM</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Pedidos</h3>
            <p className="text-gray-300 text-sm">+57 302 744 7785</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;