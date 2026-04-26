import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { getWhatsappUrl } from '@/lib/social';

/**
 * Collections Grid - Ethereal Luxury Design
 * Features: Hoverable cards, glow effects, shop overlays
 */

const collections = [
  {
    name: 'Necklaces',
    image: '/images/Screenshot 2026-04-26 044109.png',
    description: 'Delicate chains & elegant pendants',
  },
  {
    name: 'Earrings',
    image: '/images/kashmiri.png',
    description: 'Studs, dangles & statement pieces',
  },
  {
    name: 'Bracelets',
    image: '/images/Screenshot 2026-04-26 050521.png',
    description: 'Beaded & chain bracelets',
  },
  {
    name: 'Beaded Jewellery',
    image: '/images/Screenshot 2026-04-26 050732.png',
    description: 'Colorful bead collections',
  },
  {
    name: 'Phone Charms',
    image: '/images/Screenshot 2026-04-26 043330.png',
    description: 'Cute & trendy accessories',
  },
  {
    name: 'Bouquets',
    image: '/images/Screenshot 2026-04-26 051044.png',
    description: 'Flower & gift arrangements',
  },
];

export function Collections() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our curated selection of handmade jewellery across different categories
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl h-64 md:h-72 cursor-pointer"
            >
              <motion.img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-playfair text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-sm text-white/90 mb-4">{collection.description}</p>
                <Button
                  size="sm"
                  onClick={() =>
                    window.open(
                      getWhatsappUrl(`Hi, I came from your website. I'm interested in ${collection.name}. Please share price, customization options, and available designs.`),
                      '_blank'
                    )
                  }
                >
                  Order on WhatsApp
                </Button>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.70_0.15_60)]/0 to-[oklch(0.70_0.15_60)]/0 group-hover:from-[oklch(0.70_0.15_60)]/10 group-hover:to-[oklch(0.70_0.15_60)]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
