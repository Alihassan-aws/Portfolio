import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 dark:from-tech-blue/10 dark:to-tech-purple/10 -z-10"></div>

      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-tech-blue/10 rounded-full filter blur-3xl dark:bg-tech-blue/5 -z-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-tech-purple/10 rounded-full filter blur-3xl dark:bg-tech-purple/5 -z-10 animate-float delay-150"></div>

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-left">
            Hi, I'm <span className="gradient-text">Ali Hassan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light animate-slide-left delay-100">
            Business & Tech | DevOps, Cloud, Web Dev
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl animate-slide-left delay-200">
            A passionate individual specializing in AWS and DevOps, with a strong drive to automate, optimize, and deploy scalable cloud solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-slide-left delay-300">
            <Button asChild size="lg" className="rounded-md bg-tech-blue hover:bg-tech-blue/90 hover:scale-105 transition-all duration-300">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-md hover:scale-105 transition-all duration-300">
              <a
                href="/lovable-uploads/Ali%20Hassan%20-%20CV.pdf"
                download="Ali_Hassan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log("Resume download clicked")}
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Image - Removed border and added floating animation */}
        <div className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96 aspect-square animate-float">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="/lovable-uploads/coverimage.png"
              alt="Ali Hassan profile"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <AvatarFallback>AH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;