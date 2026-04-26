import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reviews Section - Ethereal Luxury Design
 * Features: Auto-sliding testimonials, star ratings, smooth animations
 */

const reviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'The quality of the jewellery is absolutely stunning! I received so many compliments on the necklace. Highly recommended!',
    location: 'Mumbai',
  },
  {
    name: 'Anjali Patel',
    rating: 5,
    text: 'Perfect Bow by Vanshika creates magic with every piece. The customization option made my gift extra special.',
    location: 'Delhi',
  },
  {
    name: 'Neha Gupta',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the earrings are even more gorgeous in person. Worth every penny!',
    location: 'Bangalore',
  },
  {
    name: 'Isha Verma',
    rating: 5,
    text: 'I love how each piece is handmade with such care. The attention to detail is incredible. My new favorite brand!',
    location: 'Pune',
  },
  {
    name: 'Divya Singh',
    rating: 5,
    text: 'Affordable luxury at its finest. The bracelets are so delicate and elegant. Already ordered twice!',
    location: 'Hyderabad',
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Customers
          </h2>
          <p className="text-lg text-foreground/70">
            Join 100+ happy customers who trust Perfect Bow
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                "{reviews[current].text}"
              </p>

              {/* Author */}
              <div className="space-y-1">
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  {reviews[current].name}
                </h3>
                <p className="text-sm text-foreground/60">{reviews[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 p-2 hover:bg-gradient-to-r hover:from-[oklch(0.95_0.05_30)] hover:to-[oklch(0.93_0.08_25)] rounded-full transition-all duration-300 text-foreground hover:text-[oklch(0.24_0.01_65)]"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 p-2 hover:bg-gradient-to-r hover:from-[oklch(0.95_0.05_30)] hover:to-[oklch(0.93_0.08_25)] rounded-full transition-all duration-300 text-foreground hover:text-[oklch(0.24_0.01_65)]"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-[oklch(0.70_0.15_60)] w-8' : 'bg-[oklch(0.70_0.15_60)]/30 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-foreground/70 font-semibold">
            ⭐ 100+ 5-star reviews | Available on Meesho & FreeUp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
