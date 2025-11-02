import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Code, Mail, FileText, BookOpen, Github } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/skills", icon: Code, label: "Skills" },
  { path: "/contact", icon: Mail, label: "Contact" },
  { path: "/resume", icon: FileText, label: "Resume" },
  { path: "/profiles", icon: Github, label: "Profiles" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 text-primary glow-cyan"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
