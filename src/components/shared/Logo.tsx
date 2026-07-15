import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  href?: string;
}

export default function Logo({ className, iconClassName, textClassName, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("flex flex-col items-center justify-center text-primary transition-opacity hover:opacity-80", className)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={cn("mb-1 h-8 w-12 sm:h-10 sm:w-14", iconClassName)}
      >
        <path d="M12 9v-2a2 2 0 0 1 4 0c0 2-4 2-4 4" />
        <path d="M12 11L3 17a2 2 0 0 0 1 3h16a2 2 0 0 0 1-3l-9-7z" />
      </svg>
      <span className={cn("font-heading text-lg font-bold tracking-[0.2em] sm:text-xl", textClassName)}>
        CLASSY DUDES
      </span>
    </Link>
  );
}
