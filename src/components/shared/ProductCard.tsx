import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  href?: string;
}

export default function ProductCard({ id, name, category, price, image, href = "#" }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col gap-4">
      <Link href={href} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 z-10 flex items-end justify-center bg-black/0 pb-6 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <Button className="w-10/12 rounded-full font-semibold translate-y-4 shadow-lg group-hover:translate-y-0 transition-all duration-500 hover:scale-105">
            <ShoppingBag className="mr-2 size-4" />
            Quick Add
          </Button>
        </div>
      </Link>
      
      <div className="flex flex-col gap-1 px-1">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {category}
        </span>
        <div className="flex items-start justify-between gap-4">
          <Link href={href} className="font-heading text-lg font-bold uppercase transition-colors hover:text-primary">
            {name}
          </Link>
          <span className="font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
