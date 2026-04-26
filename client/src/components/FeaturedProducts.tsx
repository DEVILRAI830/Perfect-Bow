import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { getInstagramUrl, getWhatsappUrl } from '@/lib/social';

/**
 * Featured Products Section - Ethereal Luxury Design
 * Features: Horizontal scroll carousel, product modals, multiple CTA options
 */

const products = [
  {
    id: 1,
    name: 'Premium Pearl & Gold Braclet',
    price: 'Rs265',
    image: '/images/Screenshot 2026-04-26 051018.png',
    description: 'Delicate rose gold pendant with crystal stone. Perfect for everyday wear or special occasions.',
  },
  {
    id: 2,
    name: 'Kashmiri Earrings',
    price: 'Rs449',
    image: '/images/Screenshot 2026-04-26 045711.png',
    description: 'Elegant chandelier earrings with beaded details. A statement piece for any occasion.',
  },
  {
    id: 3,
    name: 'Beaded Bracelet',
    price: 'Rs99',
    image: '/images/Screenshot 2026-04-26 045947.png',
    description: 'Handmade beaded bracelets in complementary colors. Stackable and versatile.',
  },
  {
    id: 4,
    name: 'Phone Charm Duo',
    price: 'Rs399',
    image: '/images/Screenshot 2026-04-26 050144.png',
    description: 'Cute phone charms with beads and crystals. Perfect for personalizing your device.',
  },
  {
    id: 5,
    name: 'Custom Hamper',
    price: 'Rs250',
    image: '/images/hamper.png',
    description: 'Mix and match your favorite pieces. Create your perfect jewellery collection.',
  },
];

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-[oklch(0.97_0.02_30)] to-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our bestsellers and customer favorites
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <motion.div
            className="flex gap-6 md:gap-8 min-w-min"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 md:h-72 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.70_0.15_60)]/0 to-[oklch(0.70_0.15_60)]/0 group-hover:from-[oklch(0.70_0.15_60)]/15 group-hover:to-[oklch(0.70_0.15_60)]/5 transition-all duration-300" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-[oklch(0.70_0.15_60)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-semibold text-[oklch(0.70_0.15_60)] text-lg">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-gradient-to-r from-[oklch(0.95_0.05_30)] to-[oklch(0.93_0.08_25)] text-[oklch(0.24_0.01_65)] hover:shadow-lg transition-shadow"
                    >
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full rounded-2xl object-cover"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-4">
                  <h2 className="font-playfair text-3xl font-bold text-foreground">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-2xl font-semibold text-[oklch(0.70_0.15_60)]">
                    {selectedProduct.price}
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6">
                  <Button
                    className="w-full bg-green-500 text-white hover:bg-green-600 font-semibold py-3"
                    onClick={() => window.open(getWhatsappUrl(`Hi! I want to order this product from Perfect Bow by Vanshika: ${selectedProduct.name}`), '_blank')}
                  >
                    Order on WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-[oklch(0.70_0.15_60)] text-[oklch(0.70_0.15_60)] hover:bg-[oklch(0.70_0.15_60)]/5 font-semibold py-3"
                    onClick={() => window.open(getInstagramUrl(), '_blank')}
                  >
                    View on Instagram
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
