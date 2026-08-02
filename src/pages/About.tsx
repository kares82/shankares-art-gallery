import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shankares',
  jobTitle: 'Abstract Artist',
  description: 'Self-taught Malaysian abstract artist based in Europe, creating original acrylic paintings that explore the space between abstract and figurative art.',
  nationality: 'Malaysian',
  workLocation: { '@type': 'Place', name: 'Europe' },
  sameAs: ['https://instagram.com/shankares.art'],
};

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Shankares — Self-Taught Malaysian Abstract Artist in Europe"
        description="Learn about Shankares, a self-taught Malaysian abstract artist based in Europe. Instinct-driven acrylic paintings that celebrate imperfection, texture, and the beauty of happy accidents."
        canonical="https://shankares.art/about"
        jsonLd={aboutJsonLd}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            About Shankares
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Malaysian artist creating from the heart of Europe
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-spacing">
        <div className="gallery-container">
          <div className="max-w-4xl mx-auto">
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm tracking-gallery uppercase text-muted-foreground">
                  Malaysian Artist Based in Europe
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-2">
                  Shankares
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Shankares, a Malaysian artist based in Europe.
                </p>

                <p>
                  I'm completely self-taught, which means I paint the way I want to paint, following 
                  instinct rather than rules. My work ranges from textured abstractions in deep blues 
                  and teals to pieces where figures or landscapes emerge from the paint. I love 
                  imperfection: the drips, the visible brushstrokes, the moments where control 
                  gives way to chance.
                </p>

                <p>
                  I work in acrylics at home, usually responding to mood or music rather 
                  than working from a plan. Each piece is an original, and each one is a conversation 
                  between intention and accident.
                </p>

                <p>
                  Living between Malaysian roots and European everyday life probably influences my 
                  comfort with things that exist in-between: not quite abstract, not quite 
                  figurative, not fitting into neat categories.
                </p>

                <p>
                  If you're drawn to art that feels honest and unpolished, you might connect with 
                  what I make.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="gallery-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-8">
              Why Imperfection Matters
            </h2>
            <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed text-muted-foreground">
              "Every crack tells a story. Every unexpected drip of paint has something to say. 
              I never fight the happy accidents. I celebrate them. That's where the real art lives."
            </blockquote>
            <p className="mt-6 text-sm tracking-gallery uppercase text-muted-foreground">
              — Shankares
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
