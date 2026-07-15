"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-background" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">Our Story</span>
            <h1 className="font-heading text-4xl font-bold uppercase tracking-widest sm:text-5xl md:text-7xl drop-shadow-lg">
              Classy Dudes
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl">
                Redefining Men's Fashion in Hisar
              </h2>
              <div className="mt-6 space-y-6 text-muted-foreground">
                <p>
                  At Classy Dudes, we believe that true style is timeless. Located in the heart of Hisar, Haryana, we have established ourselves as the premier destination for men who refuse to compromise on quality, fit, and aesthetic excellence.
                </p>
                <p>
                  From sharp, tailored suits designed for the boardroom, to elevated casual wear that commands respect on the streets, our curated collections are sourced with the modern gentleman in mind. 
                </p>
                <p>
                  We don't just sell clothes; we provide a personalized styling experience. Our experts are dedicated to helping you build a wardrobe that reflects your ambition and individuality.
                </p>
              </div>
              
              <div className="mt-10">
                <Button size="lg" className="rounded-full px-8 font-bold uppercase tracking-widest" render={<a href="/#locations" />}>
                  Visit Our Store
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4">
                <div 
                  className="aspect-square w-full rounded-2xl bg-muted bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop')" }}
                />
                <div 
                  className="aspect-[3/4] w-full rounded-2xl bg-muted bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop')" }}
                />
              </div>
              <div className="flex flex-col gap-4 pt-10">
                <div 
                  className="aspect-[3/4] w-full rounded-2xl bg-muted bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=600&auto=format&fit=crop')" }}
                />
                <div 
                  className="aspect-square w-full rounded-2xl bg-muted bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614252209825-925811fb2050?q=80&w=600&auto=format&fit=crop')" }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
