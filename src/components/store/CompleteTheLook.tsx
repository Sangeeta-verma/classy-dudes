"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/ProductCard";
import { motion } from "framer-motion";

const LOOK_PRODUCTS = [
  {
    id: "l1",
    name: "Charcoal Wool Blazer",
    category: "Outerwear",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "l2",
    name: "Crisp White Shirt",
    category: "Shirts",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "l3",
    name: "Classic Chronograph",
    category: "Accessories",
    price: 295.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
  }
];

export default function CompleteTheLook() {
  return (
    <section className="bg-muted/50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Lifestyle Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594938328870-92231e31ac4e?q=80&w=1400&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="mb-2 block text-sm font-bold uppercase tracking-widest drop-shadow-md">Curated Style</span>
              <h3 className="font-heading text-3xl font-bold uppercase tracking-widest drop-shadow-lg">The Executive</h3>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl">
                Complete The Look
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary" />
              <p className="mt-6 text-muted-foreground">
                Master the boardroom with our hand-selected ensemble. Effortless power dressing made simple.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8">
              {LOOK_PRODUCTS.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Button size="lg" className="h-14 rounded-full px-8 text-base font-bold uppercase tracking-widest transition-transform hover:scale-105">
                Add All To Cart — $765
                <ArrowRight className="ml-3 size-5" />
              </Button>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
