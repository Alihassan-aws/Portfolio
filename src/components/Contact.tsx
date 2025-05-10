import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      title: "Email",
      value: "alihassan.direct@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:alihassan.direct@gmail.com",
    },
    {
      title: "Phone",
      value: "0324-4644837",
      icon: <Phone className="h-5 w-5" />,
      link: "tel:+923244644837",
    },
    {
      title: "GitHub",
      value: "github.com/Alihassan-aws",
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/Alihassan-aws",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/alihassan-profile",
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://linkedin.com/in/alihassan-profile",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out using the contact information below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {/* Contact Information */}
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-3 bg-tech-blue/10 rounded-full text-tech-blue">
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
