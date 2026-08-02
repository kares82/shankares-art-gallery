import { motion } from 'framer-motion';
import { Shield, Truck, RefreshCw, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: 'Original Art',
    description: 'Each piece is one-of-a-kind',
  },
  {
    icon: Truck,
    title: 'Worldwide Shipping',
    description: 'Carefully packaged & insured',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Safe checkout with Stripe',
  },
  {
    icon: RefreshCw,
    title: '7-Day Returns',
    description: 'Satisfaction guaranteed',
  },
];

export const TrustBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary" aria-label="Why buy from Shankares Art">
      <div className="gallery-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <h3 className="font-medium text-sm md:text-base">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
