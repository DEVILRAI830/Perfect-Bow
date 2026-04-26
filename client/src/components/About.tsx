import { motion } from 'framer-motion';

/**
 * About Section - Ethereal Luxury Design
 * Features: Brand story, trust points, fade-in animations
 */

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const trustPoints = [
    { icon: '✨', text: '100+ 5-star reviews', subtext: 'Trusted by thousands' },
    { icon: '🚚', text: 'All India shipping', subtext: 'Fast & reliable delivery' },
    { icon: '🎨', text: 'Custom designs', subtext: 'Personalized creations' },
    { icon: '💎', text: 'Handmade quality', subtext: 'Premium craftsmanship' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-[oklch(0.97_0.02_30)] to-background">
      <div className="container max-w-5xl">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {/* Left: Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Crafted with Love
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Perfect Bow by Vanshika is a celebration of handmade artistry and affordable luxury. Every piece is meticulously crafted to bring elegance and joy to your special moments.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From delicate necklaces to statement earrings, our collection is designed for those who appreciate the beauty of handcrafted jewellery without compromising on quality or budget.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Available on Meesho and FreeUp with consistent 5-star ratings, we are committed to making luxury accessible to everyone.
            </p>
          </motion.div>

          {/* Right: Trust Points */}
          <motion.div variants={itemVariants} className="space-y-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="text-3xl flex-shrink-0">{point.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{point.text}</h3>
                  <p className="text-sm text-foreground/60">{point.subtext}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
