import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Python, and MongoDB",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React","Javascript", "Python", "MongoDB", ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: " Dashboard",
    description: "Real-time analytics dashboard for Company management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Javascript", "Css", "jQuery"],
    github: "https://github.com/yogesh03-oss/Main-Project",
    demo: "https://demo.com"
  },

  {
    title: "My College Project",
    description: "Create to My College Project",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "Javascript", "Css", ],
    github: "https://github.com/yogesh03-oss/oasys",
    demo: "https://demo.com"
  },
  {
    title: "Youtube-Clone",
    description: "I'am Recreate a Youtube clone",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tags: ["React JS", "css", "JavaScript", "API",],
    github: "https://github.com/yogesh03-oss/Youtube-clone",
    demo: "https://demo.com"
  },
  {
    title: "Gemini-Clone",
    description: "I'am Recreate a Gemini-Clone",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React JS", "css", "JavaScript","API",],
    github: "https://github.com/yogesh03-oss/Gemeni-clone",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="rounded-xl overflow-hidden bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="glowCyan" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
