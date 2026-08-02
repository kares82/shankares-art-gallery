import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Shield, Truck, RefreshCw, Award } from 'lucide-react';
import { Artwork } from '@/types/artwork';
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
import { FRAME_PRICE } from '@/data/artworks';
import { useState, useEffect } from 'react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  const { addItem } = useCart();
  const [framed, setFramed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset state when artwork changes
  useEffect(() => {
    setFramed(false);
    setSelectedImage(0);
  }, [artwork]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!artwork) return null;

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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-background z-50 overflow-hidden rounded-sm shadow-elevated flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/90 rounded-sm hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 p-6 md:p-10">
                {/* Images - Left Side */}
                <div className="lg:col-span-3">
                  {/* Main Image */}
                  <div className="relative aspect-[4/3] bg-background mb-4 overflow-hidden flex items-center justify-center p-6">
                    <img
                      src={artwork.images[selectedImage]}
                      alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions.width}×${artwork.dimensions.height}cm, original painting by Shankares`}
                      className="max-w-full max-h-full object-contain"
                    />
                    
                    {/* Sold Ribbon */}
                    {artwork.availability === 'sold' && (
                      <div className="sold-ribbon">Sold</div>
                    )}

                    {/* Reserved Badge */}
                    {artwork.availability === 'reserved' && (
                      <div className="sold-ribbon bg-accent text-accent-foreground">Reserved</div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {artwork.images.length > 1 && (
                    <div className="flex gap-3">
                      {artwork.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-16 h-16 border-2 transition-all ${
                            selectedImage === index
                              ? 'border-foreground'
                              : 'border-transparent hover:border-muted-foreground'
                          }`}
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
                </div>

                {/* Details - Right Side */}
                <div className="lg:col-span-2">
                  {/* Title & Price */}
                  <h2 className="font-display text-2xl md:text-3xl mb-3">{artwork.title}</h2>
                  
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

                  <p className="font-display text-xl mb-6">
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
                            <RadioGroupItem value="unframed" id="modal-unframed" />
                            <Label htmlFor="modal-unframed" className="cursor-pointer">
                              Unframed
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="framed" id="modal-framed" />
                            <Label htmlFor="modal-framed" className="cursor-pointer">
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
                        <p>
                          Shankares is a Malaysian abstract artist based in France. His work 
                          explores the interplay of Eastern philosophy and Western expressionism.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
