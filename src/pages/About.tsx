import { motion } from "framer-motion";
import { Award, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "50+ Projects Completed",
    description: "Successfully delivered diverse projects across multiple domains"
  },
  {
    icon: Target,
    title: "5+ Years Experience",
    description: "Expertise in modern web development technologies"
  },
  {
    icon: Zap,
    title: "99% Client Satisfaction",
    description: "Committed to excellence and quality delivery"
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="space-y-6 text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              exceptional digital experiences. My journey in tech began several years ago, and since then, 
              I've been constantly learning and evolving with the industry.
            </p>
            
            <p>
              I specialize in React, Node.js, and modern web technologies, building scalable applications 
              that not only look great but perform exceptionally. I believe in writing clean, maintainable 
              code and following best practices to deliver high-quality solutions.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical articles and tutorials.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
