import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Check, Shield, Truck, RefreshCw, Award } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { getArtworkBySlug, getRelatedArtworks, FRAME_PRICE } from '@/data/artworks';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { SEOHead } from '@/components/SEOHead';

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = getArtworkBySlug(slug || '');
  const { addItem } = useCart();
  const [framed, setFramed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!artwork) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-display text-3xl mb-4">Artwork Not Found</h1>
          <Link to="/gallery" className="text-primary hover:underline">
            Return to Gallery
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedArtworks = getRelatedArtworks(artwork);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const cmToInches = (cm: number) => (cm / 2.54).toFixed(1);

  const totalPrice = artwork.price + (framed ? FRAME_PRICE : 0);

  const handleAddToCart = () => {
    addItem(artwork, framed);
  };

  const artworkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    description: artwork.description || artwork.title,
    artMedium: artwork.medium,
    width: { '@type': 'Distance', name: `${artwork.dimensions.width} cm` },
    height: { '@type': 'Distance', name: `${artwork.dimensions.height} cm` },
    dateCreated: String(artwork.year),
    creator: { '@type': 'Person', name: 'Shankares' },
    image: artwork.images[0],
    offers: artwork.availability === 'available' ? {
      '@type': 'Offer',
      price: artwork.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Red Triangle Enterprise' },
    } : undefined,
  };

  return (
    <Layout>
      <SEOHead
        title={`${artwork.title} — Original ${artwork.medium} by Shankares`}
        description={`${artwork.title}. ${artwork.dimensions.width}×${artwork.dimensions.height}cm ${artwork.medium}. Buy original art by Shankares with worldwide shipping.`}
        canonical={`https://shankares.art/artwork/${artwork.slug}`}
        type="product"
        jsonLd={artworkJsonLd}
      />
      <article>
      <section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="gallery-container">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Gallery
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Images - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-muted mb-4 overflow-hidden">
                <img
                  src={artwork.images[selectedImage]}
                  alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions.width}×${artwork.dimensions.height}cm, original painting by Shankares`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              {artwork.images.length > 1 && (
                <div className="flex gap-3">
                  {artwork.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        'w-20 h-20 border-2 transition-all',
                        selectedImage === index
                          ? 'border-foreground'
                          : 'border-transparent hover:border-muted-foreground'
                      )}
                    >
                      <img
                        src={img}
                        alt={`${artwork.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
            >
              {/* Title & Price */}
              <h1 className="font-display text-3xl md:text-4xl mb-3">{artwork.title}</h1>
              
              {/* Availability */}
              <div className="flex items-center gap-2 mb-4">
                {artwork.availability === 'available' ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-green-700">Available</span>
                  </>
                ) : artwork.availability === 'sold' ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-sm text-destructive">Sold</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-accent-foreground">Reserved</span>
                  </>
                )}
              </div>

              <p className="font-display text-2xl mb-6">
                {formatPrice(totalPrice)}
              </p>

              {/* Details */}
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>
                  <span className="text-foreground font-medium">Size:</span>{' '}
                  {artwork.dimensions.width} × {artwork.dimensions.height} cm (
                  {cmToInches(artwork.dimensions.width)} ×{' '}
                  {cmToInches(artwork.dimensions.height)}″)
                </p>
                <p>
                  <span className="text-foreground font-medium">Medium:</span>{' '}
                  {artwork.medium}
                </p>
                <p>
                  <span className="text-foreground font-medium">Year:</span>{' '}
                  {artwork.year}
                </p>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-2 py-3 px-4 bg-secondary rounded-sm mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Unique Original with Certificate of Authenticity</span>
              </div>


              {/* Frame Option */}
              {artwork.availability === 'available' && (
                <>
                  <div className="mb-6">
                    <p className="font-medium mb-3">Frame Option</p>
                    <RadioGroup
                      value={framed ? 'framed' : 'unframed'}
                      onValueChange={(v) => setFramed(v === 'framed')}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unframed" id="unframed" />
                        <Label htmlFor="unframed" className="cursor-pointer">
                          Unframed
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="framed" id="framed" />
                        <Label htmlFor="framed" className="cursor-pointer">
                          Framed (+{formatPrice(FRAME_PRICE)})
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Add to Cart */}
                  <Button
                    onClick={handleAddToCart}
                    className="w-full btn-hero mb-3"
                  >
                    Add to Cart — {formatPrice(totalPrice)}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Make an Offer
                  </Button>
                </>
              )}

              {/* Info Accordions */}
              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm">
                    <span className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      Shipping & Delivery
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Worldwide shipping available</p>
                    <p>• Carefully packaged with museum-grade protection</p>
                    <p>• Estimated delivery: 7-14 business days</p>
                    <p>• Full insurance included</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns">
                  <AccordionTrigger className="text-sm">
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Returns & Guarantees
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground space-y-2">
                    <p>• 7-day return policy</p>
                    <p>• Full refund if not satisfied</p>
                    <p>• Artwork must be in original condition</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="artist">
                  <AccordionTrigger className="text-sm">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      About the Artist
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <p className="mb-3">
                      Shankares is a Malaysian abstract artist based in Europe. His work 
                      explores the interplay of Eastern philosophy and Western expressionism.
                    </p>
                    <Link
                      to="/about"
                      className="text-primary hover:underline"
                    >
                      Read full bio →
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedArtworks.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary">
          <div className="gallery-container">
            <h2 className="font-display text-2xl md:text-3xl mb-10 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedArtworks.map((art, index) => (
                <ArtworkCard key={art.id} artwork={art} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
    </Layout>
  );
};

export default ArtworkDetail;
