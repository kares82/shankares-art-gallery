import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Artwork } from '@/types/artwork';
import { cn } from '@/lib/utils';

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  className?: string;
}

export const ArtworkCard = ({ artwork, index = 0, className }: ArtworkCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const cmToInches = (cm: number) => (cm / 2.54).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn('artwork-card group', className)}
    >
      <Link to={`/artwork/${artwork.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-background aspect-[4/5] flex items-center justify-center p-4">
          <img
            src={artwork.images[0]}
            alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions.width}×${artwork.dimensions.height}cm, original ${artwork.category} painting by Shankares`}
            className="max-w-full max-h-full object-contain image-smooth"
            loading="lazy"
          />

          {/* Sold Ribbon */}
          {artwork.availability === 'sold' && (
            <div className="sold-ribbon">Sold</div>
          )}

          {/* Reserved Badge */}
          {artwork.availability === 'reserved' && (
            <div className="sold-ribbon bg-accent text-accent-foreground">Reserved</div>
          )}

          {/* Hover Overlay */}
          <div className="zoom-overlay">
            <span className="text-sm tracking-gallery uppercase text-foreground/80">
              View Details
            </span>
          </div>

          {/* Favorite Button */}
          <button
            className="absolute top-4 left-4 z-10 p-2 bg-background/90 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to favorites
            }}
            aria-label="Add to favorites"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="pt-4 space-y-1">
          <h3 className="font-display text-lg leading-tight group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {artwork.medium}
          </p>
          <p className="price-display">
            {artwork.availability === 'available' ? formatPrice(artwork.price) : artwork.availability.charAt(0).toUpperCase() + artwork.availability.slice(1)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
