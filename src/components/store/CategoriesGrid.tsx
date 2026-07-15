"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Signature Suits",
    description: "Tailored to perfection for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/suits",
    className: "col-span-1 md:col-span-2 row-span-2 min-h-[400px] md:min-h-full",
  },
  {
    title: "Casual Luxury",
    description: "Effortless style for everyday elegance.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/casual",
    className: "col-span-1 min-h-[300px]",
  },
  {
    title: "Footwear",
    description: "Step into sophistication.",
    image: "https://images.unsplash.com/photo-1607522370275-f14206cb2200?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/footwear",
    className: "col-span-1 min-h-[300px]",
  },
  {
    title: "Accessories",
    description: "The finest details.",
    image: "https://images.unsplash.com/photo-1611082531952-f191b29a2119?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/accessories",
    className: "col-span-1 md:col-span-2 min-h-[300px]",
  },
];

export default function CategoriesGrid() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Our Collections</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl">
            Featured Categories
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn("group relative overflow-hidden rounded-xl bg-muted", category.className)}
            >
              <Link href={category.href} className="absolute inset-0 z-20">
                <span className="sr-only">Shop {category.title}</span>
              </Link>
              
              {/* Image */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 sm:p-8 h-full">
                <h3 className="mb-2 font-heading text-2xl font-bold text-white tracking-widest transition-transform duration-500 group-hover:-translate-y-2">
                  {category.title}
                </h3>
                <p className="mb-4 text-sm text-gray-300 opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100">
                  Explore <ArrowRight className="ml-2 size-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
