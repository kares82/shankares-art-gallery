import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';

const Terms = () => {
  return (
    <Layout>
      <SEOHead
        title="Terms & Conditions — Shankares Art"
        description="Terms and conditions for purchasing original artwork from Shankares Art by Red Triangle Enterprise. Payment, shipping, returns, and copyright policies."
        canonical="https://shankares.art/terms"
      />
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Last updated: February 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="gallery-container max-w-3xl mx-auto">
          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Shankares Art. These terms and conditions govern your use of our website 
                and the purchase of artwork from Red Triangle Enterprise. By accessing this website 
                and placing orders, you agree to be bound by these terms.
              </p>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="font-display text-2xl mb-4">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We accept the following payment methods:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Major credit cards (Visa, MasterCard, American Express)</li>
                  <li>PayPal</li>
                  <li>Bank transfer (for orders over €1,000)</li>
                </ul>
                <p>
                  All prices are listed in Euros (€) and include applicable taxes. Payment must be 
                  received in full before artwork is shipped. For high-value pieces, we may offer 
                  payment plans upon request.
                </p>
              </div>
            </motion.div>

            {/* Shipping Policies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-2xl mb-4">Shipping Policies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All artwork is shipped from France with professional packaging to ensure safe delivery. 
                  Estimated delivery times are 7-14 business days depending on your location.
                </p>
                <p>
                  Shipping costs are calculated at checkout based on destination and artwork size. 
                  All shipments include insurance coverage for the full value of the artwork.
                </p>
                <p>
                  Customs duties, import taxes, and any additional fees are the responsibility of the buyer.
                </p>
              </div>
            </motion.div>

            {/* Returns & Refunds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="font-display text-2xl mb-4">Return & Refund Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We offer a 7-day return window from the date of delivery. To be eligible for a return, 
                  artwork must be in its original condition, unused, and in the original packaging.
                </p>
                <p>
                  To initiate a return, please contact us at hello@shankares.art with your order details. 
                  Return shipping costs are the responsibility of the buyer unless the artwork arrived damaged.
                </p>
                <p>
                  Refunds will be processed within 14 business days of receiving the returned artwork.
                </p>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-display text-2xl mb-4">Copyright & Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All artwork, images, and content on this website are the intellectual property of 
                  Red Triangle Enterprise. Unauthorized reproduction, distribution, or use of any 
                  artwork or content is strictly prohibited.
                </p>
                <p>
                  When you purchase artwork, you acquire the physical piece but not the copyright. 
                  The artist retains all reproduction rights. Photography of purchased artwork for 
                  personal, non-commercial use is permitted.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="font-display text-2xl mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Red Triangle Enterprise shall not be liable for any indirect, incidental, special, 
                  or consequential damages arising from the use of this website or the purchase of artwork.
                </p>
                <p>
                  Our liability is limited to the purchase price of the artwork. We are not responsible 
                  for delays caused by shipping carriers, customs, or circumstances beyond our control.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-display text-2xl mb-4">Governing Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of Malaysia. Any disputes arising from these terms shall be subject to the 
                  exclusive jurisdiction of the Malaysian courts.
                </p>
              </div>
            </motion.div>

            {/* Dispute Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="font-display text-2xl mb-4">Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In the event of any dispute, we encourage customers to first contact us directly 
                  at hello@shankares.art. We are committed to resolving issues amicably and promptly.
                </p>
                <p>
                  If a dispute cannot be resolved through direct communication, parties agree to 
                  attempt mediation before pursuing any legal action.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-border"
            >
              <h2 className="font-display text-2xl mb-4">Contact Us</h2>
              <div className="text-muted-foreground">
                <p className="mb-2">Red Triangle Enterprise</p>
                <p className="mb-2">Kulim, Kedah, Malaysia</p>
                <p>Email: hello@shankares.art</p>
              </div>
            </motion.div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
