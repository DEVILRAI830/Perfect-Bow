import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Heart, Cake, Gift, Sparkles } from 'lucide-react';

/**
 * Occasions Section - Ethereal Luxury Design
 * Features: Occasion-based collections, hover effects, CTAs
 */

const occasions = [
  {
    icon: Heart,
    name: "Valentine's Day",
    description: 'Express your love with our romantic collection',
    color: 'from-red-300 to-pink-300',
  },
  {
    icon: Cake,
    name: 'Birthdays',
    description: 'Celebrate special moments with perfect gifts',
    color: 'from-yellow-300 to-orange-300',
  },
  {
    icon: Gift,
    name: 'Anniversaries',
    description: 'Cherish your journey together',
    color: 'from-purple-300 to-pink-300',
  },
  {
    icon: Sparkles,
    name: 'Festivals',
    description: 'Shine bright during celebrations',
    color: 'from-blue-300 to-cyan-300',
  },
];

export function Occasions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
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
            Shop by Occasion
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find the perfect jewellery for every special moment
          </p>
        </motion.div>

        {/* Occasions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl h-64 md:h-72 cursor-pointer"
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${occasion.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-white" size={48} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    {occasion.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {occasion.description}
                  </p>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="sm"
                      className="bg-white text-foreground hover:shadow-lg font-semibold"
                    >
                      Explore
                    </Button>
                  </motion.div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
