import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Instagram as InstagramIcon } from 'lucide-react';
import { getInstagramUrl, instagramLabel } from '@/lib/social';

/**
 * Instagram Section - Ethereal Luxury Design
 * Features: Social proof grid, follow CTA, aesthetic layout
 */

const instagramPosts = [
  '/images/Screenshot 2026-04-26 051827.png',
  '/images/Screenshot 2026-04-26 052039.png',
  '/images/Screenshot 2026-04-26 052200.png',
  '/images/Screenshot 2026-04-26 052250.png',
  '/images/Screenshot 2026-04-26 051915.png',
  '/images/Screenshot 2026-04-26 052128.png',
  '/images/Screenshot 2026-04-26 052322.png',
  '/images/Screenshot 2026-04-26 052949.png',
  '/images/Screenshot 2026-04-26 053021.png',
  '/images/Screenshot 2026-04-26 053113.png',
  '/images/Screenshot 2026-04-26 053206.png',
  '/images/Screenshot 2026-04-26 053357.png',
];

export function Instagram() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-[oklch(0.97_0.02_30)] to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join our community on Instagram {instagramLabel} for daily inspiration and exclusive updates
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <InstagramIcon className="text-white" size={32} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg font-semibold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full"
              onClick={() => window.open(getInstagramUrl(), '_blank')}
            >
              <InstagramIcon className="mr-2" size={20} />
              Follow {instagramLabel}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
