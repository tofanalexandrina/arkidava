import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import BackToTopButton from "@/components/UI/BackToTopButton";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      <Hero />
      <Portfolio />
      <Services/>
      <AboutUs/>
      <BackToTopButton/>
    </main>
  );
}
