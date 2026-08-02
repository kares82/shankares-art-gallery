import { motion } from 'framer-motion';
import artistPortrait from '@/assets/artist-portrait.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24">
      {/* Bio Section */}
      <div className="section-spacing">
        <div className="gallery-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={artistPortrait}
                alt="Shankares, Malaysian abstract artist based in Europe, in his studio"
                className="w-full max-w-md shadow-artwork"
                loading="lazy"
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
