import { Artwork } from '@/types/artwork';

// Import artwork images
import artworkHero1 from '@/assets/artwork-hero-1.jpg';
import artworkHero2 from '@/assets/artwork-hero-2.jpg';
import artworkHero3 from '@/assets/artwork-hero-3.jpg';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';

// Import close-up detail images
import artworkDetail1 from '@/assets/artwork-detail-1.jpg';
import artworkDetail2 from '@/assets/artwork-detail-2.jpg';
import artworkDetail3 from '@/assets/artwork-detail-3.jpg';

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Profiles',
    slug: 'ethereal-profiles',
    price: 2400,
    dimensions: { width: 120, height: 40, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2024,
    images: [artworkHero1],
    category: 'semi-figurative',
    colorFamily: 'cool',
    size: 'large',
    availability: 'available',
    featured: true,
    createdAt: '2024-12-15',
  },
  {
    id: '2',
    title: 'Ocean Depths',
    slug: 'ocean-depths',
    price: 1800,
    dimensions: { width: 30, height: 90, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2024,
    images: [artworkHero2, artworkDetail2],
    category: 'abstract',
    colorFamily: 'cool',
    size: 'large',
    availability: 'available',
    featured: true,
    createdAt: '2024-11-20',
  },
  {
    id: '3',
    title: 'Distant Horizon',
    slug: 'distant-horizon',
    price: 2200,
    dimensions: { width: 90, height: 30, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2025,
    images: [artworkHero3],
    category: 'semi-figurative',
    colorFamily: 'neutral',
    size: 'large',
    availability: 'available',
    featured: true,
    createdAt: '2025-01-10',
  },
  {
    id: '4',
    title: 'Coastal Gradient',
    slug: 'coastal-gradient',
    price: 1650,
    dimensions: { width: 40, height: 120, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2024,
    images: [artwork1],
    category: 'abstract',
    colorFamily: 'mixed',
    size: 'large',
    availability: 'available',
    createdAt: '2024-10-05',
  },
  {
    id: '5',
    title: 'Nebula',
    slug: 'nebula',
    price: 1950,
    dimensions: { width: 70, height: 100, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2024,
    images: [artwork2, artworkDetail1],
    category: 'abstract',
    colorFamily: 'warm',
    size: 'large',
    availability: 'available',
    createdAt: '2024-09-12',
  },
  {
    id: '6',
    title: 'Rooftop Cats',
    slug: 'rooftop-cats',
    price: 850,
    dimensions: { width: 10, height: 50, unit: 'cm' },
    medium: 'Acrylic on Canvas',
    year: 2024,
    images: [artwork3],
    category: 'semi-figurative',
    colorFamily: 'mixed',
    size: 'medium',
    availability: 'sold',
    createdAt: '2024-08-28',
  },
  {
    id: '7',
    title: 'Among the Palms',
    slug: 'among-the-palms',
    price: 2100,
    dimensions: { width: 61, height: 45, unit: 'cm' },
    medium: 'Oil on Canvas',
    year: 2024,
    images: [artwork4, artworkDetail3],
    category: 'semi-figurative',
    colorFamily: 'cool',
    size: 'large',
    availability: 'available',
    createdAt: '2024-07-15',
  },
];

export const featuredArtworks = artworks.filter(a => a.featured);

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find(a => a.slug === slug);
};

export const getRelatedArtworks = (artwork: Artwork, limit: number = 4): Artwork[] => {
  return artworks
    .filter(a => a.id !== artwork.id)
    .filter(a => a.colorFamily === artwork.colorFamily || a.category === artwork.category)
    .slice(0, limit);
};

export const FRAME_PRICE = 150;

export const heroSlides = [
  { artwork: artworks[0], image: artworkHero1 },
  { artwork: artworks[1], image: artworkHero2 },
  { artwork: artworks[2], image: artworkHero3 },
];
