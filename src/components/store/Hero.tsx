"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2960&auto=format&fit=crop')" }}
      />
      
      {/* Marble Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2940&auto=format&fit=crop')" }}
      />
      
      {/* Gradients for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center flex flex-col items-center">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-block rounded-full border border-primary/50 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md"
        >
          New Collection 2026
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 font-heading text-4xl font-bold uppercase tracking-widest text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg"
        >
          ELEVATE YOUR <br className="hidden sm:block" />
          <span className="text-primary">STYLE</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl drop-shadow-md"
        >
          Discover the pinnacle of premium men's fashion. Experience our luxury black, white, and gold aesthetics in-store today.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold transition-transform hover:scale-105" render={<a href="#locations" />}>
            <MapPin className="mr-2 size-5" />
            Visit Our Store
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-full border-primary/50 bg-background/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary dark:hover:text-primary-foreground" render={<a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" />}>
            Chat on WhatsApp
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
