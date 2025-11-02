import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowDown, Contact, Download, Mail } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { Link } from "react-router-dom";
import profile from "../assets/yogesh.png"
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Profiles from "./Profiles";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >

                <h1>  Hi, I'm{"  Fullstack dev "}
                <span className="gradient-text animate-glow">
                  Yogeshwaran
                </span>
                </h1>
                   
            
                
              </motion.h1>
              
              <motion.p
                className="text-2xl md:text-3xl text-primary mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.p>
              
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I'm a fresher FullStack developer and student, 
                Starting my coding journey—building small projects and sharing my progress!
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <Button variant="neon" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Hire Me
                </Button>
              </Link>
              
              <Link to="/resume">
                <Button variant="glowCyan" size="lg" className="group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <Scene3D />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    
    
       <About />
       <Projects/>
       <Skills />
       <Contact />
       <Resume />
       <Profiles />


    </div>
  );
};

export default Hero;
