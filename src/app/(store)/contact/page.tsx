"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-black text-white">
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
            <h1 className="font-heading text-4xl font-bold uppercase tracking-widest sm:text-5xl md:text-7xl drop-shadow-lg">
              Contact Us
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col rounded-3xl bg-muted/30 p-8 shadow-sm sm:p-12"
            >
              <h2 className="mb-2 font-heading text-2xl font-bold uppercase tracking-wider">
                Send a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Have a question about sizing, styling, or stock? Let us know.
              </p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                  <input type="text" id="name" className="rounded-none border-b border-border bg-transparent px-0 py-2 focus:border-primary focus:outline-none" placeholder="John Doe" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input type="email" id="email" className="rounded-none border-b border-border bg-transparent px-0 py-2 focus:border-primary focus:outline-none" placeholder="john@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea id="message" rows={4} className="resize-none rounded-none border-b border-border bg-transparent px-0 py-2 focus:border-primary focus:outline-none" placeholder="How can we help you?" />
                </div>

                <Button size="lg" className="mt-4 rounded-full font-bold uppercase tracking-widest">
                  Send Message
                  <Send className="ml-2 size-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-10 font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl">
                Get In Touch
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-foreground">Visit Us</h4>
                    <p className="mt-2 text-muted-foreground">
                      123 Fashion Avenue<br />
                      Sector 14, Hisar<br />
                      Haryana 125001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-foreground">Call Us</h4>
                    <p className="mt-2 text-muted-foreground">
                      +91 98765 43210
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground/80">Mon-Sat 10am to 9pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-foreground">Email Us</h4>
                    <p className="mt-2 text-muted-foreground">
                      support@classydudes.com
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
