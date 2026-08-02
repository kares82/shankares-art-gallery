export interface Artwork {
  id: string;
  title: string;
  slug: string;
  price: number;
  dimensions: {
    width: number;
    height: number;
    unit: 'cm' | 'inches';
  };
  medium: string;
  year: number;
  description?: string;
  artistNote?: string;
  images: string[];
  category: 'abstract' | 'semi-figurative' | 'textured' | 'geometric';
  colorFamily: 'warm' | 'cool' | 'neutral' | 'mixed';
  size: 'small' | 'medium' | 'large';
  availability: 'available' | 'sold' | 'reserved';
  featured?: boolean;
  createdAt: string;
}

export interface CartItem {
  artwork: Artwork;
  framed: boolean;
  framePrice: number;
}

export interface FilterState {
  colorFamily: string[];
  size: string[];
  priceRange: string[];
  category: string[];
  availability: string[];
}

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

export interface ContactFormData {
  name: string;
  email: string;
  subject: 'purchase' | 'general';
  message: string;
}
