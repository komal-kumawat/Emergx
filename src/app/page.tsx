import Navbar from "@/app/components/sections/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <Navbar />
      <Hero/>
    </div>
  );
}
