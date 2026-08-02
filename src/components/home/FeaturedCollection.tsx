import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artworks } from '@/data/artworks';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedCollection = () => {
  const featuredArtworks = artworks.slice(0, 8);

  return (
    <section className="section-spacing bg-background">
      <div className="gallery-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore original abstract paintings, each a unique expression of color, emotion, and movement.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredArtworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm tracking-gallery uppercase gallery-link"
          >
            View All Works
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
