import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Cozy cat café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4 sm:mb-6 tracking-tight">
            Neko & Kopi Catfé
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-8 sm:mb-10">
            Where coffee meets cuddles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("menu")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium w-full sm:w-auto"
            >
              View Menu
            </Button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("intro")}
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit text-white/60 hover:text-white transition-colors animate-bounce z-20"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
