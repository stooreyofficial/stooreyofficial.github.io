import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BookOpen, Gift, Puzzle, Dumbbell, Paintbrush } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="inline h-10 w-10 text-primary" />
            About Stoorey
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-xl leading-relaxed">
              Welcome to Stoorey, your one-stop destination for quality products across multiple categories. 
              We are passionate about providing our customers with carefully curated items that enhance their daily lives.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6 flex items-center gap-2">
              <BookOpen className="inline h-7 w-7 text-primary" />
              Our Story
            </h2>
            <p>
              Stoorey was born from a simple idea: to make quality products easily accessible to our community at the best possible prices. We noticed that finding good stationery and sports supplies locally was a challenge, with no dedicated shops nearby. Our goal is to bring the experience of a big mart right into your neighborhood—bridging the gap between premium stores and small local shops. We are committed to offering a wide selection, great value, and a convenient shopping experience for everyone.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Gift className="inline h-7 w-7 text-primary" />
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="inline h-6 w-6 text-primary" /> Stationery
                </h3>
                <p>Our stationery range covers all your everyday essentials, from pens, pencils, and notebooks to files, folders, and office supplies. We stock a complete selection of traditional stationery items for students, professionals, and offices, ensuring you always have what you need to stay organized and productive.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Gift className="inline h-6 w-6 text-primary" /> Gifts
                </h3>
                <p>Discover a delightful range of gifts including couple gifts, elegant showpiece items, fancy stationery perfect for return gifts, beautiful photo frames, and god idols. Our collection is curated to help you find the perfect present for every occasion and celebration.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Puzzle className="inline h-6 w-6 text-primary" /> Toys
                </h3>
                <p>Our toys collection includes a variety of activity and building toys that spark creativity and imagination, as well as musical toys. We offer options for all ages to encourage learning and fun through play.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Dumbbell className="inline h-6 w-6 text-primary" /> Sports
                </h3>
                <p>Our sports collection features a wide variety of equipment and accessories for all ages. We offer cricket supplies including bats (even plastic bats for small kids), a range of cricket balls, footballs, volleyballs, and basketballs. You’ll also find skates, skating accessories, and fitness-related products to help you stay active and healthy.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Paintbrush className="inline h-6 w-6 text-primary" /> Art & Craft
                </h3>
                <p>We offer a wide range of art and craft supplies for students of all ages. From paints, brushes, and sketchbooks to craft kits and decorative materials, our collection helps students complete school projects and explore their creative hobbies with ease.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Puzzle className="inline h-7 w-7 text-primary" />
              Our Commitment
            </h2>
            <p>
              At Stoorey, we are committed to quality, sustainability, and customer satisfaction. Every product 
              in our catalog is carefully selected to meet our high standards for quality and value.
            </p>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default About;