import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 85 },
      { name: "css", level: 75 },
      { name: "React", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "TailwindCSS", level: 70},
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "node js", level: 65 },
      { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 70 },
      
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 87 },
      { name: "Figma", level: 70 },
      { name: "AWS", level: 60 },
      { name: "Canva", level: 85 },
    ]
  }
];

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden border border-primary/20">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: delay / 1000, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h2>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={categoryIndex * 200 + skillIndex * 100}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies. 
            Always excited to take on new challenges and expand my skill set.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
