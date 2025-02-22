"use client";
import React from "react";

import { HoverEffect } from "./card-hover-effect";
import { HoverBorderGradient } from "./hover-border-gradient";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  

  return (
    
    <div className="flex max-w-fit w-auto  fixed top-5 inset-x-0 mx-auto border  border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[100] p-0  items-center justify-center space-x-4">
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center"
    >
        <HoverEffect items={navItems}/>
                  
      </HoverBorderGradient>
    </div>
    
  
  );
};