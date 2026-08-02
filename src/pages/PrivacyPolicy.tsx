import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy — Shankares Art"
        description="How Red Triangle Enterprise collects, uses, and protects your personal data when you browse and purchase original artwork from Shankares Art."
        canonical="https://shankares.art/privacy-policy"
      />
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Privacy Policy
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
                Red Triangle Enterprise ("we," "us," or "our") respects your privacy and is committed 
                to protecting your personal information. This Privacy Policy explains how we collect, 
                use, and safeguard your data when you visit our website or make a purchase.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="font-display text-2xl mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                  <li><strong>Shipping Information:</strong> Delivery address, postal code, country</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through third-party payment processors)</li>
                  <li><strong>Communication Data:</strong> Messages sent through our contact form or email</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information (collected automatically)</li>
                </ul>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-2xl mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Order Processing:</strong> To process and fulfill your artwork purchases</li>
                  <li><strong>Shipping:</strong> To deliver artwork to your specified address</li>
                  <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                  <li><strong>Marketing:</strong> To send newsletters and promotional content (only with your consent)</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
                <p>
                  We will never sell or rent your personal information to third parties.
                </p>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="font-display text-2xl mb-4">Data Protection & Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  All payment transactions are encrypted using SSL technology. We do not store 
                  complete credit card information on our servers—payment processing is handled 
                  by secure third-party payment processors.
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-display text-2xl mb-4">Cookie Usage</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our website uses cookies to enhance your browsing experience. Cookies are small 
                  text files stored on your device that help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Maintain your shopping cart contents</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. Disabling 
                  cookies may affect certain website features.
                </p>
              </div>
            </motion.div>

            {/* Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="font-display text-2xl mb-4">Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We work with trusted third-party service providers to operate our business:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Payment Processors:</strong> To securely process credit card and PayPal payments</li>
                  <li><strong>Shipping Carriers:</strong> To deliver artwork to your address</li>
                  <li><strong>Email Services:</strong> To send order confirmations and newsletters</li>
                  <li><strong>Analytics:</strong> To understand website usage and improve our service</li>
                </ul>
                <p>
                  These providers only have access to the information necessary to perform their 
                  services and are obligated to protect your data.
                </p>
              </div>
            </motion.div>

            {/* Customer Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-display text-2xl mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data in a readable format</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at hello@shankares.art.
                </p>
              </div>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="font-display text-2xl mb-4">Data Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal information only for as long as necessary to fulfill 
                  the purposes for which it was collected, including legal, accounting, or 
                  reporting requirements.
                </p>
                <p>
                  Order records are retained for 7 years for tax and legal purposes. 
                  Marketing data is retained until you unsubscribe.
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
                <p className="mb-4">
                  If you have questions about this Privacy Policy or how we handle your data, 
                  please contact us:
                </p>
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

export default PrivacyPolicy;
