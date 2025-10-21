import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-primary" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-accent" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-[#ff0000]" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1da1f2]" },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-lg bg-card border border-primary/20 text-muted-foreground transition-all duration-300 ${social.color}`}
            aria-label={social.label}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
};
