import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Calidad Premium",
      description: "Ingredientes frescos y de la mejor calidad en cada preparación"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Servicio Rápido",
      description: "Entrega rápida sin comprometer el sabor y la calidad"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hecho con Amor",
      description: "Cada plato es preparado con pasión y dedicación"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Para Toda la Familia",
      description: "Sabores que unen a las familias de Mosquera"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Sobre <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Nosotros</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              En <strong className="text-yellow-400">El Diamante</strong>, somos más que un restaurante de comida rápida. 
              Somos una familia que ha dedicado años a perfeccionar recetas únicas que conquistan 
              el corazón de Mosquera.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Desde nuestras hamburguesas gourmet hasta nuestras pizzas artesanales, cada plato 
              refleja nuestro compromiso con la excelencia. Utilizamos ingredientes frescos, 
              técnicas culinarias tradicionales y un toque de innovación que nos hace únicos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="text-yellow-400 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Nuestro restaurante"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Logo */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl"
              >
                <img 
                  src="/logo-fastfood.png" 
                  alt="El Diamante Logo" 
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl text-center">
                <div className="text-2xl font-black text-black">5+</div>
                <div className="text-sm font-bold text-black">Años</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl text-center">
                <div className="text-2xl font-black text-black">1000+</div>
                <div className="text-sm font-bold text-black">Clientes</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl text-center">
                <div className="text-2xl font-black text-black">50+</div>
                <div className="text-sm font-bold text-black">Platos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;