import Navbar from "@/app/components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Platform from "./components/sections/Platform";
import CurtainsAnimation from "./components/sections/CurtainsAnimation";
import VideoPlayer from "./components/sections/VideoPlayer";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <Navbar />
      <Hero/>
      <Platform/>
      <CurtainsAnimation/>
      <VideoPlayer/>
      <FAQ/>
    </div>
  );
}
