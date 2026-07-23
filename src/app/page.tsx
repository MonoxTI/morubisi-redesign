import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Projects />
      <CTA />
    </>
  );
}
