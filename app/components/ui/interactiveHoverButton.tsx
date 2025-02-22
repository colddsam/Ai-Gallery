import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

type InteractiveHoverButtonProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

export const InteractiveHoverButton = React.forwardRef<
  HTMLAnchorElement, // The ref will be forwarded to a Link, which is an <a> element
  InteractiveHoverButtonProps
>(({ children, className, href, ...props }, ref) => {
  return (
    <Link
      href={`/${href}` || "/about"} // Use the href prop passed or default to "/gallery"
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-xl border bg-background p-2 px-6 text-center font-semibold",
        className
      )}
      {...props} // Pass all other props to Link (without href)
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Link>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
