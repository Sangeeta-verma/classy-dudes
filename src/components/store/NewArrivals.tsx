"use client";

import ProductCard from "@/components/shared/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NEW_ARRIVALS = [
  {
    id: "1",
    name: "Onyx Black Suit",
    category: "Suits",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Golden Hour Blazer",
    category: "Casual Wear",
    price: 280.00,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Classic Oxford Shoes",
    category: "Footwear",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1614252209825-925811fb2050?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Chronograph Watch",
    category: "Accessories",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Silk Tie Collection",
    category: "Accessories",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1578330759082-9657ba5041ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Midnight Overcoat",
    category: "Outerwear",
    price: 395.00,
    image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function NewArrivals() {
  return (
    <section className="bg-background py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Just Dropped</span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl">
              New Arrivals
            </h2>
            <div className="mt-6 h-1 w-24 bg-primary" />
          </div>
          
          <Button variant="ghost" className="group font-bold uppercase tracking-widest text-primary hover:bg-transparent">
            View All <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {NEW_ARRIVALS.map((product) => (
              <CarouselItem key={product.id} className="pl-4 sm:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-end gap-2 pr-4 sm:pr-0">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
