import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import About from "./About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <About />
      {/* <FeaturedProducts /> */}
      {/* <CategoryGrid /> */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
