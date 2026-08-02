import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Send, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Shankares — Inquire About Original Artwork"
        description="Get in touch with Shankares for purchase inquiries, commissions, or questions about original abstract paintings. Typically responds within 24 hours."
        canonical="https://shankares.art/contact"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="gallery-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Have a question about a painting? I'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="gallery-container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="What is this about?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      placeholder="Tell me more about what you're looking for..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-hero w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              {/* Direct Contact */}
              <div>
                <h3 className="font-display text-xl mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@shankares.art"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hello@shankares.art
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    @shankares.art
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  I typically respond within 24 hours.
                </p>
              </div>


              {/* Location */}
              <div>
                <h3 className="font-display text-xl mb-3">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Based in Europe
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
