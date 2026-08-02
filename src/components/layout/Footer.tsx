import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Footer = () => {
  return (
    <footer className="bg-secondary py-16 md:py-20" role="contentinfo">
      <div className="gallery-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Info & Legal */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg mb-4">Information</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/shipping-returns" className="text-muted-foreground hover:text-foreground transition-colors">
                Shipping & Returns
              </Link>
              <a href="mailto:hello@shankares.art" className="text-muted-foreground hover:text-foreground transition-colors">
                hello@shankares.art
              </a>
            </nav>
          </div>
        </div>

        {/* Collapsible Legal Information */}
        <div className="mt-12 pt-8 border-t border-border">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="terms" className="border-b-0 border-t-0">
              <AccordionTrigger className="text-xs font-medium uppercase tracking-wider text-foreground hover:no-underline py-3">
                Terms & Conditions
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All sales are final once shipped. 7-day return policy from delivery date for undamaged items in original condition. 
                  Worldwide shipping available (7-14 business days). Customs/import duties are buyer's responsibility. 
                  Secure payment via Stripe/PayPal. All artwork is original and copyrighted by Red Triangle Enterprise.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy" className="border-b-0">
              <AccordionTrigger className="text-xs font-medium uppercase tracking-wider text-foreground hover:no-underline py-3">
                Privacy Policy
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We collect customer information (name, email, address) only for order fulfillment and with your consent for marketing updates. 
                  Your data is securely protected and never sold to third parties.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Red Triangle Enterprise. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Red Triangle (PG0580106-V)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
