import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid2X2, Grid3X3, LayoutGrid } from 'lucide-react';
import { artworks } from '@/data/artworks';
import { FilterState, SortOption, Artwork } from '@/types/artwork';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ArtworkModal } from '@/components/artwork/ArtworkModal';

const filterOptions = {
  colorFamily: [
    { value: 'warm', label: 'Warm Tones' },
    { value: 'cool', label: 'Cool Tones' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'mixed', label: 'Mixed' },
  ],
  size: [
    { value: 'small', label: 'Small (under 70cm)' },
    { value: 'medium', label: 'Medium (70-100cm)' },
    { value: 'large', label: 'Large (100cm+)' },
  ],
  priceRange: [
    { value: 'under-1000', label: 'Under €1,000' },
    { value: '1000-1500', label: '€1,000 - €1,500' },
    { value: '1500-2000', label: '€1,500 - €2,000' },
    { value: 'over-2000', label: '€2,000+' },
  ],
  category: [
    { value: 'abstract', label: 'Pure Abstract' },
    { value: 'semi-figurative', label: 'Semi-Figurative' },
    { value: 'geometric', label: 'Geometric' },
    { value: 'textured', label: 'Textured' },
  ],
  availability: [
    { value: 'available', label: 'Available' },
    { value: 'sold', label: 'Sold' },
    { value: 'reserved', label: 'Reserved' },
  ],
};

// Helper to determine artwork orientation
const isVertical = (artwork: Artwork) => artwork.dimensions.height > artwork.dimensions.width;
const isHorizontal = (artwork: Artwork) => artwork.dimensions.width >= artwork.dimensions.height;

// Curated artwork card with orientation-aware aspect ratio
const GalleryArtworkCard = ({ 
  artwork, 
  index = 0, 
  onClick,
  variant = 'default'
}: { 
  artwork: Artwork; 
  index?: number; 
  onClick: () => void;
  variant?: 'default' | 'vertical' | 'horizontal';
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const cmToInches = (cm: number) => (cm / 2.54).toFixed(1);

  // Calculate aspect ratio based on actual artwork dimensions
  const aspectRatio = artwork.dimensions.width / artwork.dimensions.height;
  const isVerticalArt = isVertical(artwork);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="artwork-card group cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container with dynamic aspect ratio */}
      <div 
        className={cn(
          "relative overflow-hidden bg-background/50 flex items-center justify-center",
          isVerticalArt ? "aspect-[3/4] p-6" : "aspect-[4/3] p-6"
        )}
      >
          <img
            src={artwork.images[0]}
            alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions.width}×${artwork.dimensions.height}cm, original ${artwork.category} painting by Shankares`}
            className="max-w-full max-h-full object-contain image-smooth transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          style={{
            aspectRatio: aspectRatio,
          }}
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
      </div>

      {/* Info */}
      <div className="pt-5 space-y-1.5">
        <h3 className="font-display text-lg leading-tight group-hover:text-primary transition-colors duration-300">
          {artwork.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {artwork.medium}
        </p>
        <p className="price-display">
          {artwork.availability === 'available' ? formatPrice(artwork.price) : artwork.availability.charAt(0).toUpperCase() + artwork.availability.slice(1)}
        </p>
      </div>
    </motion.div>
  );
};

// Section header component for orientation groups
const OrientationHeader = ({ 
  title, 
  subtitle,
  index = 0 
}: { 
  title: string; 
  subtitle: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="mb-8"
  >
    <h3 className="font-display text-xl md:text-2xl text-foreground/90 mb-2">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground">
      {subtitle}
    </p>
  </motion.div>
);

export const GallerySection = () => {
  const [filters, setFilters] = useState<FilterState>({
    colorFamily: [],
    size: [],
    priceRange: [],
    category: [],
    availability: [],
  });
  const [sort, setSort] = useState<SortOption>('newest');
  const [columns, setColumns] = useState<2 | 3 | 4>(3);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const toggleFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      colorFamily: [],
      size: [],
      priceRange: [],
      category: [],
      availability: [],
    });
  };

  const activeFilterCount = Object.values(filters).flat().length;

  const filteredArtworks = useMemo(() => {
    let result = [...artworks];

    if (filters.colorFamily.length > 0) {
      result = result.filter((a) => filters.colorFamily.includes(a.colorFamily));
    }
    if (filters.size.length > 0) {
      result = result.filter((a) => filters.size.includes(a.size));
    }
    if (filters.category.length > 0) {
      result = result.filter((a) => filters.category.includes(a.category));
    }
    if (filters.availability.length > 0) {
      result = result.filter((a) => filters.availability.includes(a.availability));
    }
    if (filters.priceRange.length > 0) {
      result = result.filter((a) => {
        if (filters.priceRange.includes('under-1000') && a.price < 1000) return true;
        if (filters.priceRange.includes('1000-1500') && a.price >= 1000 && a.price < 1500)
          return true;
        if (filters.priceRange.includes('1500-2000') && a.price >= 1500 && a.price < 2000)
          return true;
        if (filters.priceRange.includes('over-2000') && a.price >= 2000) return true;
        return false;
      });
    }

    switch (sort) {
      case 'newest':
        result.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [filters, sort]);

  // Separate artworks by orientation
  const { horizontalArtworks, verticalArtworks } = useMemo(() => {
    const horizontal = filteredArtworks.filter(isHorizontal);
    const vertical = filteredArtworks.filter(isVertical);
    return { horizontalArtworks: horizontal, verticalArtworks: vertical };
  }, [filteredArtworks]);

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  // Vertical artworks use fewer columns for better presentation
  const verticalGridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  };

  return (
    <>
      <section id="gallery" className="section-spacing scroll-mt-24">
        <div className="gallery-container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover original abstract paintings. Each work is unique, created with passion 
              in my French studio.
            </p>
          </motion.div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Recently Added</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center gap-1 border border-border rounded-sm p-1">
                <button
                  onClick={() => setColumns(2)}
                  className={cn(
                    'p-1.5 rounded-sm transition-colors',
                    columns === 2 ? 'bg-muted' : 'hover:bg-muted'
                  )}
                  aria-label="2 columns"
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setColumns(3)}
                  className={cn(
                    'p-1.5 rounded-sm transition-colors',
                    columns === 3 ? 'bg-muted' : 'hover:bg-muted'
                  )}
                  aria-label="3 columns"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setColumns(4)}
                  className={cn(
                    'p-1.5 rounded-sm transition-colors',
                    columns === 4 ? 'bg-muted' : 'hover:bg-muted'
                  )}
                  aria-label="4 columns"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Filter Sidebar */}
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block w-64 shrink-0"
              >
                <div className="sticky top-32 space-y-8">
                  {/* Color */}
                  <div>
                    <h3 className="font-medium mb-4">Color</h3>
                    <div className="space-y-3">
                      {filterOptions.colorFamily.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={filters.colorFamily.includes(option.value)}
                            onCheckedChange={() =>
                              toggleFilter('colorFamily', option.value)
                            }
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <h3 className="font-medium mb-4">Size</h3>
                    <div className="space-y-3">
                      {filterOptions.size.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={filters.size.includes(option.value)}
                            onCheckedChange={() => toggleFilter('size', option.value)}
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="font-medium mb-4">Price</h3>
                    <div className="space-y-3">
                      {filterOptions.priceRange.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={filters.priceRange.includes(option.value)}
                            onCheckedChange={() =>
                              toggleFilter('priceRange', option.value)
                            }
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <h3 className="font-medium mb-4">Style</h3>
                    <div className="space-y-3">
                      {filterOptions.category.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={filters.category.includes(option.value)}
                            onCheckedChange={() =>
                              toggleFilter('category', option.value)
                            }
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-medium mb-4">Availability</h3>
                    <div className="space-y-3">
                      {filterOptions.availability.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={filters.availability.includes(option.value)}
                            onCheckedChange={() =>
                              toggleFilter('availability', option.value)
                            }
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}

            {/* Artwork Grid - Organized by Orientation */}
            <div className="flex-1">
              {filteredArtworks.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">
                    No artworks match your filters.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-20">
                  <p className="text-sm text-muted-foreground">
                    {filteredArtworks.length} artwork
                    {filteredArtworks.length !== 1 ? 's' : ''}
                  </p>

                  {/* Horizontal Artworks Section */}
                  {horizontalArtworks.length > 0 && (
                    <div>
                      <OrientationHeader 
                        title="Landscape & Panoramic Works"
                        subtitle="Expansive compositions that invite contemplation"
                        index={0}
                      />
                      <div className={cn('grid gap-8 md:gap-10', gridCols[columns])}>
                        {horizontalArtworks.map((artwork, index) => (
                          <GalleryArtworkCard
                            key={artwork.id}
                            artwork={artwork}
                            index={index}
                            onClick={() => setSelectedArtwork(artwork)}
                            variant="horizontal"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vertical Artworks Section */}
                  {verticalArtworks.length > 0 && (
                    <div>
                      <OrientationHeader 
                        title="Portrait & Vertical Works"
                        subtitle="Intimate pieces with upward visual flow"
                        index={1}
                      />
                      <div className={cn('grid gap-6 md:gap-8', verticalGridCols[columns])}>
                        {verticalArtworks.map((artwork, index) => (
                          <GalleryArtworkCard
                            key={artwork.id}
                            artwork={artwork}
                            index={index}
                            onClick={() => setSelectedArtwork(artwork)}
                            variant="vertical"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  );
};
