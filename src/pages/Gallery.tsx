import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid2X2, Grid3X3, LayoutGrid, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { artworks } from '@/data/artworks';
import { FilterState, SortOption } from '@/types/artwork';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

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

const Gallery = () => {
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

    // Apply filters
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

    // Apply sort
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

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <Layout>
      <SEOHead
        title="Gallery — Original Abstract Paintings by Shankares"
        description="Browse the full collection of original abstract paintings by Shankares. Filter by style, size, color, and price. Acrylic on canvas with worldwide shipping."
        canonical="https://shankares.art/gallery"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Discover original abstract paintings. Each work is unique, created with passion 
            at home in Europe.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-spacing">
        <div className="gallery-container">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
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
              {/* Sort */}
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

              {/* Grid Toggle */}
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

            {/* Artwork Grid */}
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
                <>
                  <p className="text-sm text-muted-foreground mb-6">
                    {filteredArtworks.length} artwork
                    {filteredArtworks.length !== 1 ? 's' : ''}
                  </p>
                  <div className={cn('grid gap-6 md:gap-8', gridCols[columns])}>
                    {filteredArtworks.map((artwork, index) => (
                      <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        index={index}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
