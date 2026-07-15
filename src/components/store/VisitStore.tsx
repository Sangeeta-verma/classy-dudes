"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisitStore() {
  return (
    <section id="locations" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Experience Luxury</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl">
            Visit Our Store
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-2xl bg-background shadow-xl lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <h3 className="mb-8 font-heading text-2xl font-bold uppercase tracking-widest">
              Classy Dudes Flagship
            </h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-foreground">Address</h4>
                  <p className="mt-1 text-muted-foreground">
                    123 Fashion Avenue<br />
                    Sector 14, Hisar<br />
                    Haryana 125001, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-foreground">Business Hours</h4>
                  <p className="mt-1 text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 9:00 PM<br />
                    Sunday: 11:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-foreground">Contact</h4>
                  <p className="mt-1 text-muted-foreground">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 font-bold uppercase tracking-widest">
                Get Directions
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-primary px-8 font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground" render={<a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" />}>
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="min-h-[400px] w-full bg-muted lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111756.28639233633!2d75.64205574577821!3d29.141525252877526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0ef136421461!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full lg:min-h-full grayscale contrast-125 dark:invert dark:hue-rotate-180"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
