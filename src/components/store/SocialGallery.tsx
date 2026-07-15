"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  {
    id: "g1",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g2",
    image: "https://images.unsplash.com/photo-1616847229562-b13c72e70e9a?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g3",
    image: "https://images.unsplash.com/photo-1507153683883-7c0b621e2023?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: false,
  },
  {
    id: "g4",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g5",
    image: "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: false,
  },
  {
    id: "g6",
    image: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g7",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g8",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: false,
  },
  {
    id: "g9",
    image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  },
  {
    id: "g10",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    handle: "@classy_dudes_",
    isVideo: true,
  }
];

export default function SocialGallery() {
  return (
    <section className="bg-background pt-20 lg:pt-32 pb-0">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">#ClassyDudesClub</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl">
            In Real Life
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Tag us in your mirror selfies and fit checks for a chance to be featured on our wall.
          </p>
        </div>
      </div>

      {/* Seamless Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
        {GALLERY_IMAGES.map((item, index) => (
          <motion.a
            key={item.id}
            href="#"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-muted"
          >
            {/* Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            
            {/* Play Icon for Videos */}
            {item.isVideo && (
              <div className="absolute top-3 right-3 z-10 flex size-6 items-center justify-center rounded-sm bg-white/80 backdrop-blur-sm">
                <Play className="size-3 text-black fill-black ml-0.5" />
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60 z-20" />
            
            {/* Instagram Icon & Handle */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2 size-8 text-white drop-shadow-md"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="font-semibold text-white drop-shadow-md">
                {item.handle}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="py-16 flex justify-center bg-background w-full">
        <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest px-8" render={<a href="https://www.instagram.com/classy_dudes_/" target="_blank" rel="noreferrer" />}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          Follow @classy_dudes_
        </Button>
      </div>
    </section>
  );
}
