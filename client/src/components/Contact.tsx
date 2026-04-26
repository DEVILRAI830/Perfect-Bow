import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { getInstagramUrl, getWhatsappUrl } from '@/lib/social';

/**
 * Contact Section - Ethereal Luxury Design
 * Features: Multiple contact options, WhatsApp CTA, contact form
 */

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out through your preferred channel.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          // @ts-ignore
        >
          {/* WhatsApp */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:border-green-400/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
              <MessageCircle className="text-green-600" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-foreground/70 mb-4">Quick orders and instant responses</p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
              onClick={() => window.open(getWhatsappUrl(), '_blank')}
            >
              Chat Now
            </Button>
          </motion.div>

          {/* Instagram DM */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:border-pink-400/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-full bg-pink-100 mb-4 group-hover:bg-pink-200 transition-colors">
              <Mail className="text-pink-600" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Instagram</h3>
            <p className="text-foreground/70 mb-4">Direct message on Instagram</p>
            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg"
              onClick={() => window.open(getInstagramUrl(), '_blank')}
            >
              Follow & DM
            </Button>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:border-blue-400/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors">
              <Phone className="text-blue-600" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 mb-4">Send us your inquiries</p>
            <Button
              variant="outline"
              className="w-full border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold"
              onClick={() => window.location.href = 'mailto:hello@perfectbow.com'}
            >
              Send Email
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border border-white/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-6 text-center">
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:outline-none focus:border-[oklch(0.70_0.15_60)] transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:outline-none focus:border-[oklch(0.70_0.15_60)] transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your inquiry..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:outline-none focus:border-[oklch(0.70_0.15_60)] transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[oklch(0.95_0.05_30)] to-[oklch(0.93_0.08_25)] text-[oklch(0.24_0.01_65)] hover:shadow-lg font-semibold py-3 text-base"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-foreground/70 mb-4">
            Available on Meesho & FreeUp | All India Shipping
          </p>
          <p className="text-sm text-foreground/60">
            © 2024 Perfect Bow by Vanshika. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
