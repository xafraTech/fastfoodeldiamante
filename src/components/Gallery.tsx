import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Hamburguesa gourmet",
      title: "Hamburguesas Gourmet"
    },
    {
      src: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Pizza artesanal",
      title: "Pizzas Artesanales"
    },
    {
      src: "https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Perros calientes",
      title: "Perros Especiales"
    },
    {
      src: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Malteadas",
      title: "Malteadas Premium"
    },
    {
      src: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "BBQ Burger",
      title: "BBQ Deluxe"
    },
    {
      src: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Pizza hawaiana",
      title: "Pizza Hawaiana"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573027447785?text=¡Hola! Me gustaría hacer un pedido', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Galería</span> de Sabores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una muestra visual de nuestras creaciones culinarias que despiertan todos los sentidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2"
                >
                  <Phone className="w-3 h-3" />
                  <span>Ordenar</span>
                </motion.button>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Se te antojó algo?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            No esperes más, ordena ahora y disfruta de nuestros sabores únicos
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-yellow-400/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Hacer Pedido por WhatsApp</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;