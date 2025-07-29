import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';

const Menu = () => {
  const handleWhatsAppOrder = (item: string) => {
    const message = `¡Hola! Me gustaría ordenar: ${item}`;
    window.open(`https://wa.me/573027447785?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuCategories = [
    {
      title: "Hamburguesas Gourmet",
      items: [
        {
          name: "Diamante de la casa",
          description: "Pan Brioche lechuga tomate doble carne artesanal 250 gr,queso chedar tocineta pepinilos, cebola caramelizada, chorizo   picado y salsa de la casa.",
          price: "$35.000",
          image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "Diamante gourmet",
          description: "Pan Brioche lechuga tomate carne artesanal 160 gr queso, chedar cebola caramelizada tocineta, pepinilos y salsa de la casa.",
          price: "27.000",
          image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "DIamante caribeña",
          description: "Pan Brioche, carne artesanal 160 gr, rebanas de plátano dulce, tocineta, queso costeño y suero Costeño",
          price: "$25.000",
          image: "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Pizzas Artesanales",
      items: [
        {
          name: "De la casa",
          description: "Queso mozzarella, salami italiano , tomate fresco y oregano.",
          price: "$20.000",
          image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "Campesina",
          description: "Carne desmechada, queso mozzarella , mazorca, tierna, platano maduro y cilantro",
          price: "$20.000",
          image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Mexicana",
          description: "Carne molida ligeramente picante, queso mozzarella, picó de gallo, jalapeños y tacos de maiz.",
          price: "$20.000",
          image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Perros Calientes",
      items: [
        {
          name: "Hawaiano",
          description: "Pan Brioche, salchicha tipo americana , tocineta, queso, mozzarela, piña en trozos, cebola y salsas.",
          price: "$21.000",
          image: "https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "De la casa",
          description: " Pan Brioche, salchicha tipo americana, tocineta, queso, mozzarela, polo desmechado, cebola, huevos de codorniz y salsas.",
          price: "$25.000",
          image: "https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Bebidas",
      items: [
        {
          name: "Jugos naturales",
          description: "Furtos rojos, Lulo, Hierbabuena, Limonada de coco y mas ",
          price: "$6.500",
          image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Gaseosas",
          description: "Coca-Cola, Pepsi, Soda Hatsu, Cerveza ",
          price: "$4.500",
          image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Menú</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestros sabores únicos, preparados con ingredientes frescos y mucho amor
          </p>
        </motion.div>

        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    {item.popular && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-2xl font-black text-yellow-400">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppOrder(item.name)}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-yellow-400/25 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Ordenar</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWhatsAppOrder("Quiero ver el menú completo")}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-yellow-400/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Ver Menú Completo por WhatsApp</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;