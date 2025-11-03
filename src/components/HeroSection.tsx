import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ecommerce.jpg";
import stooreyLogo from "@/assets/stoorey_logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium products showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-center mx-auto">
          {/* Brand Logo */}
          <img src={stooreyLogo} alt="Stoorey Logo" className="mx-auto mb-6 h-20 w-20 rounded-full shadow-lg border-4 border-primary bg-white object-contain animate-fade-up" />

          {/* Tagline */}
          <div className="mb-4 animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary font-semibold px-6 py-2 rounded-full text-lg tracking-wide shadow-sm">
              Your Neighborhood’s One-Stop Store
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-hero text-foreground mb-4 font-extrabold animate-fade-up">
            Welcome to <span className="text-primary">Stoorey</span>
          </h1>

          {/* Brand Value Prop */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up">
            Where quality meets convenience. Discover curated stationery, unique gifts, fun toys, and sports gear for every age—right in your locality. Experience the joy of shopping at a big mart, with the warmth of a neighborhood store.
          </p>

          {/* WhatsApp Quick Chat & Catalog */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up">
            {/* <a
              href="https://wa.me/919214745754?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a> */}
            <a
              href="https://wa.me/c/919214745754"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 15.013a6.5 6.5 0 10-2.85 2.85l2.975.85a1 1 0 001.263-1.263l-.85-2.975z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 11.5l1.5 1.5 3-3" />
                </svg>
                View WhatsApp Catalogue
              </Button>
            </a>
          </div>

          {/* Stats */}
          {/* <div className="flex items-center justify-center space-x-8 mt-12 animate-fade-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;