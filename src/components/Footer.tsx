
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Ali Hassan
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Bridging Business & Technology
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/Alihassan-aws" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-tech-blue/10 hover:bg-tech-blue/20 text-tech-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/alihassan-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-tech-blue/10 hover:bg-tech-blue/20 text-tech-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:thealihassan.contact@gmail.com" 
              className="p-2 rounded-full bg-tech-blue/10 hover:bg-tech-blue/20 text-tech-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ali Hassan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
