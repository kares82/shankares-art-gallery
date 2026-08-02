import { motion } from 'framer-motion';
import { Package, Truck, Globe, RefreshCw, Shield, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';

const ShippingReturns = () => {
  return (
    <Layout>
      <SEOHead
        title="Shipping & Returns — Shankares Art"
        description="Worldwide shipping on original artwork by Shankares. Fully insured delivery in 7–14 business days. 7-day hassle-free return policy with museum-grade packaging."
        canonical="https://shankares.art/shipping-returns"
      />
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Shipping & Returns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Everything you need to know about receiving your artwork safely
          </motion.p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 border-b border-border" aria-label="Shipping highlights">
        <div className="gallery-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: 'Worldwide Shipping', desc: 'We deliver globally' },
              { icon: Clock, label: '7-14 Business Days', desc: 'Estimated delivery' },
              { icon: Shield, label: 'Fully Insured', desc: 'Protected shipments' },
              { icon: RefreshCw, label: '7-Day Returns', desc: 'Hassle-free returns' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-secondary rounded-sm"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h2 className="font-display text-sm mb-1">{item.label}</h2>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="gallery-container max-w-3xl mx-auto">
          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {/* Worldwide Shipping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Worldwide Shipping</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We're proud to offer worldwide shipping on all artwork. No matter where you are, 
                  we'll deliver your piece safely to your door.
                </p>
                <p>
                  All shipments originate from France, where each artwork is carefully prepared 
                  and packaged by the artist personally.
                </p>
              </div>
            </motion.div>

            {/* Delivery Times */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Estimated Delivery Times</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Delivery times vary by destination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>France:</strong> 2-4 business days</li>
                  <li><strong>European Union:</strong> 5-7 business days</li>
                  <li><strong>United Kingdom:</strong> 7-10 business days</li>
                  <li><strong>United States & Canada:</strong> 7-14 business days</li>
                  <li><strong>Asia & Australia:</strong> 10-14 business days</li>
                  <li><strong>Rest of World:</strong> 10-21 business days</li>
                </ul>
                <p className="text-sm">
                  *These are estimates. Actual delivery times may vary due to customs processing 
                  and local postal services.
                </p>
              </div>
            </motion.div>

            {/* Shipping Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Shipping Costs & Insurance</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shipping costs are calculated at checkout based on your location and the 
                  size of the artwork. All shipments include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full insurance coverage for the artwork value</li>
                  <li>Tracking number provided via email</li>
                  <li>Signature confirmation on delivery</li>
                </ul>
                <p>
                  <strong>Free shipping</strong> is available on orders over €500 within the European Union.
                </p>
              </div>
            </motion.div>

            {/* Customs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="font-display text-2xl mb-4">Customs & Import Duties</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For international orders outside the EU, please note that customs duties, 
                  import taxes, and any additional fees are the responsibility of the buyer.
                </p>
                <p>
                  These charges are determined by your country's customs office and are not 
                  included in our prices or shipping costs. We recommend checking with your 
                  local customs office for more information.
                </p>
              </div>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Packaging & Handling</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every artwork is carefully packaged to ensure it arrives in perfect condition:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acid-free tissue paper wrapping</li>
                  <li>Corner protectors for framed pieces</li>
                  <li>Double-walled cardboard boxes</li>
                  <li>Fragile handling labels</li>
                  <li>Certificate of authenticity included</li>
                </ul>
                <p>
                  Large or high-value pieces may be shipped in custom wooden crates for 
                  additional protection.
                </p>
              </div>
            </motion.div>

            {/* Return Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Return Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We want you to love your artwork. If you're not completely satisfied, we 
                  offer a <strong>7-day return window</strong> from the date of delivery.
                </p>
                <p>To be eligible for a return, the artwork must be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In its original, undamaged condition</li>
                  <li>Unused and unframed (if sold unframed)</li>
                  <li>In the original packaging</li>
                </ul>
              </div>
            </motion.div>

            {/* Return Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-display text-2xl mb-4">How to Return</h2>
              <div className="space-y-4 text-muted-foreground">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Contact us</strong> at hello@shankares.art within 7 days of 
                    receiving your artwork
                  </li>
                  <li>
                    <strong>Receive return authorization</strong> and shipping instructions
                  </li>
                  <li>
                    <strong>Pack the artwork securely</strong> using the original packaging
                  </li>
                  <li>
                    <strong>Ship the artwork</strong> with tracking and insurance
                  </li>
                  <li>
                    <strong>Receive your refund</strong> within 14 business days of us 
                    receiving the artwork
                  </li>
                </ol>
                <p>
                  Return shipping costs are the responsibility of the buyer unless the artwork 
                  arrived damaged or was not as described.
                </p>
              </div>
            </motion.div>

            {/* Non-Returnable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <h2 className="font-display text-2xl mb-4">Non-Returnable Items</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>The following items cannot be returned:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Artwork that has been damaged by the buyer</li>
                  <li>Items returned after the 7-day window</li>
                </ul>
              </div>
            </motion.div>

            {/* Damaged Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="font-display text-2xl mb-4">Damaged or Lost Shipments</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If your artwork arrives damaged, please contact us immediately with photos 
                  of the damage and packaging. Do not discard any packaging materials.
                </p>
                <p>
                  All shipments are fully insured. We will work with the shipping carrier to 
                  file a claim and either send a replacement or issue a full refund.
                </p>
                <p>
                  If your shipment is lost in transit, we will initiate a trace with the carrier. 
                  If the package cannot be located within 30 days, we will provide a full refund 
                  or replacement.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="pt-8 border-t border-border"
            >
              <h2 className="font-display text-2xl mb-4">Questions?</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  If you have any questions about shipping or returns, please don't hesitate 
                  to contact us.
                </p>
                <p className="mb-2">Email: hello@shankares.art</p>
                <p>We typically respond within 24 hours.</p>
              </div>
            </motion.div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingReturns;
