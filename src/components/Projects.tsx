import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Lifeflow Blood Bank",
      description: "A comprehensive blood donation management system for connecting donors with recipients and hospitals.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/lovable-uploads/bloodbank.png",  // Updated path
      githubLink: "#",
      liveLink: "https://lifeflowbloodbank.netlify.app/",
    },
    {
      title: "Drax Chatbot",
      description: "Friendly conversational chatbot built with Python Flask and natural language processing.",
      technologies: ["Python", "Flask", "TensorFlow", "NLP"],
      image: "/lovable-uploads/drax chatbot.png",  // Updated image path
      githubLink: "#",
      liveLink: "https://draxchatbot.netlify.app/",  // Updated live link
    },
    {
      title: "Background Removal",
      description: "An AI-powered tool to remove backgrounds from images automatically.",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
      image: "/lovable-uploads/backgroundremoval.png",  // Image path for background removal
      githubLink: "#",
      liveLink: "https://aibackgroundremove.netlify.app/",  // Live link for background removal
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden rounded-xl transition-all hover:shadow-lg duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}  // Updated to dynamic source
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-md" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="rounded-md bg-tech-blue hover:bg-tech-blue/90" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
