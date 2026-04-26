import { motion } from 'framer-motion';
import { Sparkles, Award, Truck, Palette } from 'lucide-react';

/**
 * Why Choose Us Section - Ethereal Luxury Design
 * Features: Animated icons, number counters, scroll reveals
 */

const reasons = [
  {
    icon: Sparkles,
    title: 'Handmade Quality',
    description: 'Each piece is meticulously crafted with premium materials and attention to detail.',
    number: '100%',
  },
  {
    icon: Award,
    title: '100+ 5-Star Reviews',
    description: 'Trusted by thousands of happy customers across India.',
    number: '100+',
  },
  {
    icon: Truck,
    title: 'Fast India Shipping',
    description: 'Quick and reliable delivery to your doorstep across all of India.',
    number: '2-5',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Create your own unique pieces with our customization options.',
    number: '∞',
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the Perfect Bow difference
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border border-white/30 hover:border-[oklch(0.70_0.15_60)]/30"
                whileHover={{ y: -8 }}
              >
                {/* Glow Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.70_0.15_60)]/0 to-[oklch(0.70_0.15_60)]/0 group-hover:from-[oklch(0.70_0.15_60)]/10 group-hover:to-[oklch(0.70_0.15_60)]/5 transition-all duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex p-3 rounded-full bg-gradient-to-br from-[oklch(0.95_0.05_30)] to-[oklch(0.93_0.08_25)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-[oklch(0.24_0.01_65)]" size={24} />
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    className="text-4xl md:text-5xl font-playfair font-bold text-[oklch(0.70_0.15_60)]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    {reason.number}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
