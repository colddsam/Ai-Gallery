"use client";

import { Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { InteractiveHoverButton } from "../components/ui/interactiveHoverButton";

export default function PricingSection() {
  return (
    <ul className="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 px-4 py-6 md:px-0 md:h-screen h-auto ">
      <GridItem
        title="Basic Plan"
        price="$9.99/month"
        description="Perfect for personal use with basic features."
        features={[
          "Access to standard wallpapers",
          "Limited AI-generated wallpapers",
          "Basic support",
        ]}
        buttonLabel="Choose Basic"
      />
      <GridItem
        title="Pro Plan"
        price="$19.99/month"
        description="Unlock all features and exclusive wallpapers."
        features={[
          "Access to premium wallpapers",
          "Unlimited AI-generated wallpapers",
          "Priority support",
          "Early access to new features",
        ]}
        buttonLabel="Choose Pro"
      />
      <GridItem
        title="Enterprise Plan"
        price="$49.99/month"
        description="Best for businesses with advanced needs."
        features={[
          "Custom AI-generated wallpapers",
          "Dedicated support",
          "Team access",
          "API access",
        ]}
        buttonLabel="Choose Enterprise"
      />
    </ul>
  );
}

interface GridItemProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
}

const GridItem = ({ title, price, description, features, buttonLabel }: GridItemProps) => {
  return (
    <li className="flex flex-col items-center md:w-72 w-full mx-1 md:mx-3 md:h-[80vh] h-auto ">
      <div className="relative h-full w-full rounded-3xl border-2 p-2 md:rounded-3xl md:p-3 ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6  h-full">
          <div className="relative flex flex-col justify-between gap-3  h-full">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
            </div>
            <div className="space-y-3 h-[20vh]">
              <h3 className="pt-0.5 text-xl font-semibold font-sans tracking-wide text-black dark:text-white md:text-2xl">
                {title}
              </h3>
              <h2 className="text-lg font-bold text-black dark:text-white">{price}</h2>
              <p className="text-sm text-black dark:text-neutral-400">{description}</p>
            </div>
            <ul className="list-disc pl-5 md:space-y-2 text-sm text-black dark:text-neutral-400">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              {buttonLabel}
            </button> */}
            <InteractiveHoverButton href='about'>{buttonLabel}</InteractiveHoverButton>
          </div>
        </div>
      </div>
    </li>
  );
};
