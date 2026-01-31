import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import MenuSection from '@/components/MenuSection';
import CatsSection from '@/components/CatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <MenuSection />
        <CatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
