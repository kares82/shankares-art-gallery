import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { TrustBanner } from '@/components/home/TrustBanner';
import { GallerySection } from '@/components/home/GallerySection';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';


const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Shankares — Original Abstract Art | Malaysian Artist in France"
        description="Discover original abstract paintings by Shankares, a self-taught Malaysian artist based in France. Unique acrylic artworks on canvas with worldwide shipping."
        canonical="https://shankares.art/"
      />
      <HeroSlideshow />
      <TrustBanner />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      
    </Layout>
  );
};

export default Index;
