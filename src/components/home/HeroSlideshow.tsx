import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroSlides } from '@/data/artworks';

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.artwork.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={`${slide.artwork.title} — ${slide.artwork.medium}, ${slide.artwork.dimensions.width}×${slide.artwork.dimensions.height}cm, original abstract painting by Shankares`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/40" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-background"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide mb-4">
            SHANKARES
          </h1>
          <p className="text-lg md:text-xl tracking-gallery uppercase opacity-90 mb-10">
            Abstract Art • Malaysian Artist in France
          </p>
          <a 
            href="#gallery" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero-outline border-background text-background hover:bg-background hover:text-foreground"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-background w-8'
                : 'bg-background/50 hover:bg-background/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-background/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
