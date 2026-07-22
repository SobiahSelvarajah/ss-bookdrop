import Hero from "@/components/sections/hero/Hero";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Genres from "@/components/sections/genres/Genres";
import Pricing from "@/components/sections/pricing/Pricing";


export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Genres />
      <Pricing />
    </>
  );
}
