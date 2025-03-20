"use client"

import Image from 'next/image'
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { BlurFade } from "../components/ui/blur-fade";

export default function gallery() {

  const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Game",
    title: "Game for a Staff Software Industry",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

   const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

    const cards = data.map((card) => (
      <Card key={card.src} card={card}  />
    ));
   return (
    <div className="h-auto w-screen mx-auto px-0 flex flex-col justify-center items-center overflow-auto">
      <div className="h-auto w-full flex flex-col  justify-between items-center ">
        <div className="w-full flex flex-row justify-center items-center h-[10vh] md:h-[25vh] mt-20 md:mt-10">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>

       </div>
               <div className=" h-auto w-full box-border overflow-x-hidden flex flex-col items-center justify-center">
          <h2 className="relative inline-flex overflow-hidden mt-3 md:mt-0 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl pb-0 md:pb-12 px-4">
            Category
          </h2>
          <Carousel items={cards} />
        </div>
      <div className="h-auto w-full box-border overflow-x-hidden flex flex-col items-center justify-center ">
        <h2 className="relative inline-flex overflow-hidden text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl py-0 mt-3 md:py-12">
          Trending
         </h2>
         <div className="px-4 h-auto w-full py-6 ">
           <div className="columns-2 gap-4 sm:columns-3">
{images.map((imageUrl, idx) => {
  const isLandscape = idx % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  
  return (
    <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
      <Image
        className="mb-4 size-full rounded-lg object-contain"
        src={imageUrl}
        alt={`Random stock image ${idx + 1}`}
        width={width}
        height={height}
      />
    </BlurFade>
  );
})}

      </div>
         </div>
      </div>
    </div>
  );

}