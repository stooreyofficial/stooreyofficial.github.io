import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about your products.";
    const whatsappNumber = "919214745754";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp Quick Chat */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Need Quick Help?</h3>
            <p className="text-primary-foreground/80 mb-6">
              Message us on WhatsApp for instant support and product inquiries.
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-primary font-semibold py-3 px-4 rounded-lg transition-colors"
              style={{ color: '#fff' }}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </button>
          </div>
          {/* Contact Methods (like Contact page) */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary-foreground mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-primary-foreground/80">stooreyofficial@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary-foreground mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-primary-foreground/80">+91 9214745754</p>
                <p className="text-primary-foreground/80">+91 7877360540</p>
                {/* <p className="text-sm text-primary-foreground/80 mt-1">Mon-Sun, 9AM-6PM IST</p> */}
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary-foreground mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-primary-foreground/80">1/427, Ambedkarpuram, Awas Vikas - 3, SIS Hospital Road, Kalyanpur, Kanpur, Uttar Pradesh - 208017</p>
                <a
                  href="https://maps.app.goo.gl/nqGzk4GoeWx52xYY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary-foreground underline hover:text-primary-foreground/80"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577093844769" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-primary/20 rounded-lg hover:shadow-md transition-shadow"
              >
                <Facebook className="h-6 w-6 text-[#1877F2]" />
                <span className="font-medium">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/stooreyofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-primary/20 rounded-lg hover:shadow-md transition-shadow"
              >
                <Instagram className="h-6 w-6 text-[#E4405F]" />
                <span className="font-medium">Instagram</span>
              </a>
              {/* <a 
                href="https://youtube.com/@stoorey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-primary/20 rounded-lg hover:shadow-md transition-shadow"
              >
                <Youtube className="h-6 w-6 text-[#FF0000]" />
                <span className="font-medium">YouTube</span>
              </a> */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Stoorey. All rights reserved.
            </p>
            {/*
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;