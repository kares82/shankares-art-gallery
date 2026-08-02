import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show popup after 30 seconds or on scroll
  // For now, we'll just have a newsletter section in footer instead

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    setIsSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-background p-8 shadow-elevated"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-sm transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="font-display text-2xl mb-2">
                  Join the Collector&apos;s List
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get first access to new paintings and exclusive studio updates.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full btn-hero">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  No spam, unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <h3 className="font-display text-2xl mb-2">Welcome!</h3>
                <p className="text-muted-foreground">
                  Thank you for joining. Check your email for a special welcome.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Newsletter section for footer/inline use
export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="gallery-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Stay Inspired
          </h2>
          <p className="text-background/70 max-w-md mx-auto mb-8">
            New art delivered to your inbox each month. Join collectors who discover first.
          </p>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
              />
              <Button
                type="submit"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <p className="text-background/90">
              Thank you! Welcome to the collector's circle.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
