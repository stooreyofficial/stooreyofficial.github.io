import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about your products.";
    const whatsappNumber = "919214745754";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Have questions? We'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">Chat with us instantly</p>
                    <Button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#20BA59]">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Message Us
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">stooreyofficial@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-primary-foreground/80">+91 9214745754</p>
                <p className="text-primary-foreground/80">+91 7877360540</p>
                    {/* <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM IST</p> */}
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">1/427, Ambedkarpuram, Awas Vikas - 3, SIS Hospital Road, Kalyanpur, Kanpur, Uttar Pradesh - 208017</p>
                    <a
                      href="https://maps.app.goo.gl/nqGzk4GoeWx52xYY7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary underline hover:text-primary/80"
                    >
                      Get Directions on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Action */}
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for updates, deals, and more!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61577093844769" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-background rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Facebook className="h-6 w-6 text-[#1877F2]" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  
                  <a 
                    href="https://instagram.com/stooreyofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-background rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Instagram className="h-6 w-6 text-[#E4405F]" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-semibold mb-3">Need Quick Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Message us on WhatsApp for instant support and product inquiries.
                </p>
                <Button 
                  onClick={handleWhatsApp} 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#20BA59]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="grid md:grid-cols-3 gap-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Monday - Friday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Saturday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Sunday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;