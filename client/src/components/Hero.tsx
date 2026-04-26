import { motion } from 'framer-motion';
import { ImageCarousel } from './ImageCarousel';
import { SparkleContainer } from './Sparkle';
import { Button } from './ui/button';

/**
 * Hero Section - Ethereal Luxury Design
 * Features: Auto-sliding carousel, overlay text with animations, floating sparkles
 * Design: Soft gradients, delicate typography, dreamy atmosphere
 */

const heroImages = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/Lr7kn5iFHbpqdvhK3peRGS/hero-jewellery-main-KTXTjjJvWMNDWi5S2tCht4.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/Lr7kn5iFHbpqdvhK3peRGS/necklaces-collection-HaiBsFtqEb7fJsusAf49Ad.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/Lr7kn5iFHbpqdvhK3peRGS/earrings-collection-aE6hyEx7zgEpStkHJ5CVJp.webp',
];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Carousel */}
      <ImageCarousel images={heroImages} autoPlay interval={5000} />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      {/* Sparkles */}
      <SparkleContainer />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // @ts-ignore
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight max-w-4xl"
        >
          Perfect Bow By Vanshika
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="font-playfair   lg:text-4xl font-bold mb-4 leading-tight max-w-4xl"
        >
          Elegance that speaks for you
        </motion.h2>
        {/* Subheading */}
    
        <motion.p
          variants={itemVariants}
          className="font-poppins text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl opacity-90"
        >
          Curated handmade jewellery crafted for every occasion
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[oklch(0.95_0.05_30)] to-[oklch(0.93_0.08_25)] text-[oklch(0.24_0.01_65)] hover:shadow-lg font-semibold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full"
            >
              Shop Now
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full"
            >
              Explore Collections
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-2 text-sm md:text-base opacity-80"
        >
          <span className="text-yellow-300">★★★★★</span>
          <span>100+ 5-star reviews | All India Shipping</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity } as any}
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2 opacity-75">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
