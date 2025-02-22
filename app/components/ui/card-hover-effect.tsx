import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, MouseEvent } from "react";

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;

  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + startPosition;
  const startTime = performance.now();
  const duration = 2000; 

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

interface HoverEffectProps {
  items: NavItem[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);



  return (
    <div className={cn("flex flex-row justify-between items-center", className)}>
      {items.map((item, idx) => (
        <Link href={item.link} key={item.link}
          
            className="relative group block p-2 md:pr-3 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative inred font-bold text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 m-0">
              <span className="block sm:hidden">{item.icon}</span>
              <span className="hidden sm:block text-sm">{item.name}</span>
            </div>
        </Link>
      ))}
    </div>
  );
};