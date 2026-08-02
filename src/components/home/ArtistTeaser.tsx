import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import artistPortrait from '@/assets/artist-portrait.jpg';

export const ArtistTeaser = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="gallery-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <img
                src={artistPortrait}
                alt="Shankares - Abstract Artist"
                className="w-full max-w-md mx-auto shadow-artwork"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 border border-border bg-background -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <span className="text-sm tracking-gallery uppercase text-muted-foreground">
              About the Artist
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              The Journey of Color
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Born in Malaysia and now creating from his studio in France, Shankares brings together 
              Eastern philosophy and Western expression in bold, textured abstract works. Each painting 
              is a meditation on imperfection, a celebration of the unexpected beauty found in 
              spontaneous creation.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-gallery uppercase gallery-link"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
