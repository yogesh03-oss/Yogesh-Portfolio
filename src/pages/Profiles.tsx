import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    username: "@yogesh03-oss",
    stats: "6+ repositories • 1k+ stars",
    description: "Open source contributions and personal projects",
    link: "https://github.com",
    color: "text-[#333333]",
    bgColor: "bg-[#333333]/10",
    borderColor: "border-[#333333]/30"
  },

  {
    name: "SkillRack",
    icon: Code2,
    username: "@yogesh",
    stats: "10+ challenges completed",
    description: "Coding challenges and programming contests",
    link: "https://skillrack.com",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30"
  }
];

const Profiles = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Coding Profiles
        </motion.h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl bg-card border ${profile.borderColor} hover:border-primary/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${profile.bgColor}`}>
                    <Icon className={`w-8 h-8 ${profile.color}`} />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                    className="group"
                  >
                    <a 
                      href={profile.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  </Button>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {profile.name}
                </h3>

                <p className={`text-sm mb-2 ${profile.color} font-semibold`}>
                  {profile.username}
                </p>

                <p className="text-sm text-muted-foreground mb-3">
                  {profile.stats}
                </p>

                <p className="text-muted-foreground">
                  {profile.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actively solving problems and contributing to the developer community. 
            Always learning and improving my coding skills across multiple platforms.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
