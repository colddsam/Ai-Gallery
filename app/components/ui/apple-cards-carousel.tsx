"use client";

import React, { useEffect, useState, createContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

// Carousel Prop Types
interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
};

// Carousel Context for handling card close and index
export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Carousel Component
export const Carousel = ({ items}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize scroll position and check scrollability
// useEffect for setting initial scroll
useEffect(() => {
  if (carouselRef.current) {
    carouselRef.current.scrollLeft = 0; // Ensure it starts from 0
    setTimeout(checkScrollability, 100); // Ensure scrollability updates after DOM update
  }
}, []);


  // Check if the carousel can scroll left or right
const checkScrollability = () => {
  if (carouselRef.current) {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Fix: Prevent overscroll calculation errors
    const maxScrollLeft = scrollWidth - clientWidth;
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft - 1); // Small offset to avoid extra scrolling
  }
};


  // Scroll functions
  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => {
  if (carouselRef.current) {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    
    // Fix: Prevent scrolling beyond the last item
    const newScrollLeft = Math.min(scrollLeft + 300, maxScrollLeft);
    carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  }
};


  // Handle closing the card and scroll to it
  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => window.innerWidth < 768;

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full ">
        <div
          className=" flex w-full overflow-x-scroll overscroll-x-auto my-6 scroll-smooth [scrollbar-width:none] "
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] pr-5 overflow-hidden bg-gradient-to-l ")} />
          <div className={cn("flex flex-row justify-start gap-4  max-w-7xl ")}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut", once: true },
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10 ">
          <button
            type="button"
            className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            type="button"
            className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll Right"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Card Component
export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  layout?: boolean;
}) => (
  <motion.button
    layoutId={layout ? `card-${card.title}` : undefined}
    className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
  >
    <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
    <div className="relative z-40 p-8">
      <motion.p layoutId={layout ? `category-${card.category}` : undefined} className="text-white text-sm md:text-base font-medium text-left">
        {card.category}
      </motion.p>
      <motion.p layoutId={layout ? `title-${card.title}` : undefined} className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left mt-2">
        {card.title}
      </motion.p>
    </div>
    <BlurImage
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute z-10 inset-0"
    />
  </motion.button>
);

// BlurImage Component for lazy loading and blurring the image on load
export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300 ", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt || "Background of a beautiful view"}
      {...rest}
    />
  );
};
