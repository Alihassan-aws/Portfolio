
import React from "react";
import { Code, Database, Github, Cloud, Laptop } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Custom web solutions tailored to your specific needs, from simple static sites to complex web applications.",
      icon: <Code className="h-10 w-10" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric design approach that focuses on creating intuitive, engaging, and accessible interfaces.",
      icon: <Laptop className="h-10 w-10" />,
    },
    {
      title: "DevOps Consulting & Setup",
      description:
        "Implementation of CI/CD pipelines, automation, and improved development workflows for your team.",
      icon: <Github className="h-10 w-10" />,
    },
    {
      title: "Cloud Infrastructure Deployment",
      description:
        "Expert setup and management of cloud resources across various providers for optimal performance.",
      icon: <Cloud className="h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services that combine business understanding with 
            technical expertise to deliver practical, efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-tech-blue/10 rounded-lg w-fit mb-4 text-tech-blue">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
