import React from "react";
import { Code, Cloud, Github, Briefcase, Database, CloudCog, Terminal, Laptop } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Cloud Computing", icon: <Cloud className="h-5 w-5" />, level: 80 },
    { name: "DevOps", icon: <Github className="h-5 w-5" />, level: 85 },
    { name: "Docker", icon: <CloudCog className="h-5 w-5" />, level: 75 },
    { name: "Web Development", icon: <Code className="h-5 w-5" />, level: 70 },
    { name: "Virtualization (VMware)", icon: <Database className="h-5 w-5" />, level: 70 },
    { name: "Terminal/Linux", icon: <Terminal className="h-5 w-5" />, level: 80 },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I am a highly motivated BBA student with a strong foundation in logistics, warehouse operations, and modern technology integration.
            </p>
            <p className="text-lg">
              Alongside my operational expertise, I actively work on DevOps projects — deploying scalable web apps using Docker, Terraform, and cloud platforms like AWS. My work bridges the gap between business strategy and technical execution, allowing me to create solutions that are both innovative and practical.
            </p>
            <p className="text-lg">
              I am currently expanding my skill set in Kubernetes, chatbot development, and cloud-native application design. Behind a terminal, I’m passionate about systems that work smart, scale fast, and deliver real impact.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-4 flex flex-col space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-tech-blue/10 rounded-md text-tech-blue dark:bg-tech-blue/20">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-tech-blue h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
