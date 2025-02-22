import Image from "next/image"
// import Link from "next/link"
import { TextGenerateEffect } from "./components/ui/text-generate-effect"
import { AuroraText } from "./components/ui/aurora-text"
import { InteractiveHoverButton } from './components/ui/interactiveHoverButton';
import { FeaturesSectionDemo } from "./components/ui/features";

export default function Home() {

  const words=`Discover unique AI-generated anime wallpapers and bring your devices to life with stunning visuals.`
  return (
    <div className='h-auto w-screen mx-auto px-6  flex flex-col justify-center items-center  '>
    <div className=" h-screen w-full flex flex-col py-16 md:flex-row justify-center items-center ">
      <div className="flex flex-col justify-center h-full items-center md:items-start w-screen md:w-[60%] mr-6 box-border ">
          <AuroraText>Welcome to AI Anime Gallery</AuroraText>

        <TextGenerateEffect words={ words} />
          {/* <Link
            href="/gallery"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Explore Gallery
        </Link> */}
        <InteractiveHoverButton href='gallery'>Explore Gallery</InteractiveHoverButton>
        </div>
        <div className="relative h-64 md:h-96 w-screen md:w-[40%]">
          <Image src="/placeholder.png" alt="Featured AI Anime Wallpaper" fill className="object-cover rounded-lg" />
        </div>
      </div>
      <div className='h-auto w-full box-border overflow-x-hidden flex flex-col items-center justify-center'>
        <h2 className='relative inline-flex overflow-hidden text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl'>Features</h2>
      <FeaturesSectionDemo />

      </div>
    </div>
    
  )
}

