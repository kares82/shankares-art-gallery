import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24">
      {/* Bio Section */}
      <div className="section-spacing">
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
                  About Shankares
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Shankares. Self-taught, Malaysian, based in Europe.
                </p>

                <p>
                  I paint by instinct, not rules. My work shifts between abstraction and something almost recognizable: a figure, a landscape, a feeling. Usually led by mood rather than a plan.
                </p>

                <p>
                  I don't chase perfection. The drips and visible brushstrokes stay. That's the work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-16 md:py-24 bg-secondary">
        <div className="gallery-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-8">
              Why Imperfection Matters
            </h3>
            <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed text-muted-foreground">
              "Every crack tells a story. Every unexpected drip of paint has something to say. 
              I never fight the happy accidents. I celebrate them. That's where the real art lives."
            </blockquote>
            <p className="mt-6 text-sm tracking-gallery uppercase text-muted-foreground">
              — Shankares
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
