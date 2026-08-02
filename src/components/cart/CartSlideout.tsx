import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { FRAME_PRICE } from '@/data/artworks';
import { Link } from 'react-router-dom';

export const CartSlideout = forwardRef<HTMLDivElement>((_, ref) => {
  const { items, isOpen, closeCart, removeItem, updateFrame, subtotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background shadow-elevated"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-display text-xl">Your Cart</h2>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-muted rounded-sm transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button variant="outline" className="mt-6" onClick={closeCart}>
                      Continue Browsing
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map(item => (
                      <div key={item.artwork.id} className="flex gap-4">
                        {/* Image */}
                        <Link
                          to={`/artwork/${item.artwork.slug}`}
                          onClick={closeCart}
                          className="shrink-0"
                        >
                          <img
                            src={item.artwork.images[0]}
                            alt={item.artwork.title}
                            className="w-24 h-24 object-cover"
                          />
                        </Link>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/artwork/${item.artwork.slug}`}
                            onClick={closeCart}
                            className="font-display text-lg hover:text-primary transition-colors line-clamp-1"
                          >
                            {item.artwork.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.artwork.dimensions.width} × {item.artwork.dimensions.height} cm
                          </p>

                          {/* Frame Option */}
                          <div className="flex items-center gap-2 mt-3">
                            <Switch
                              id={`frame-${item.artwork.id}`}
                              checked={item.framed}
                              onCheckedChange={(checked) =>
                                updateFrame(item.artwork.id, checked)
                              }
                            />
                            <Label
                              htmlFor={`frame-${item.artwork.id}`}
                              className="text-sm text-muted-foreground cursor-pointer"
                            >
                              Add frame (+{formatPrice(FRAME_PRICE)})
                            </Label>
                          </div>

                          {/* Price & Remove */}
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-semibold">
                              {formatPrice(item.artwork.price + item.framePrice)}
                            </span>
                            <button
                              onClick={() => removeItem(item.artwork.id)}
                              className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-display text-xl">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Shipping calculated at checkout
                  </p>
                  <Button className="w-full btn-hero">
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

CartSlideout.displayName = 'CartSlideout';
