import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Collections } from '@/components/Collections';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Occasions } from '@/components/Occasions';
import { Reviews } from '@/components/Reviews';
import { Instagram } from '@/components/Instagram';
import { Contact } from '@/components/Contact';
import { FloatingButton } from '@/components/FloatingButton';
import { getWhatsappUrl } from '@/lib/social';

/**
 * Perfect Bow by Vanshika - Main Homepage
 * Ethereal Luxury Design with Soft Gradients
 * Complete e-commerce experience with smooth animations and high conversion focus
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Collections Grid */}
        <Collections />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Occasions */}
        <Occasions />

        {/* Reviews */}
        <Reviews />

        {/* Instagram */}
        <Instagram />

        {/* Contact */}
        <Contact />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingButton
        href={getWhatsappUrl('Hi Perfect Bow')}
        label="WhatsApp"
      />
    </div>
  );
}
