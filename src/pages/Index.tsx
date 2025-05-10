import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    // Observe all elements with animation classes
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Stagger animations
    document.querySelectorAll(".stagger-animation").forEach((container) => {
      const children = container.children;
      Array.from(children).forEach((child, index) => {
        observer.observe(child);
        (child as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      <Button
        className={`fixed bottom-8 right-8 rounded-full w-12 h-12 p-0 shadow-lg bg-tech-blue hover:bg-tech-blue/90 transition-all duration-300 hover:scale-110 ${
          showScrollToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;