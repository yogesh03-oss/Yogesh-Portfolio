import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <div className="p-8 rounded-full bg-primary/20 border-4 border-primary/40 glow-cyan">
              <FileText className="w-20 h-20 text-primary" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Resume
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Download my resume to learn more about my experience, skills, and achievements.
            Available in PDF format for your convenience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="neon" 
              size="lg"
              className="group"
              onClick={() => {
                // In a real app, this would trigger the actual download
                alert("Resume download would start here!");
              }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download PDF
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.open("#", "_blank");
              }}
            >
              <FileText className="w-5 h-5 mr-2" />
              View Online
            </Button>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 rounded-xl bg-card border border-primary/20"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Resume Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5+ years in web development</li>
                  <li>• Led multiple high-impact projects</li>
                  <li>• Expertise in full-stack development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Education</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bachelor's in Computer Science</li>
                  <li>• Multiple certifications</li>
                  <li>• Continuous learner</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React, TypeScript, Node.js</li>
                  <li>• Cloud platforms (AWS, Firebase)</li>
                  <li>• Database design & optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 50+ successful projects</li>
                  <li>• Open source contributor</li>
                  <li>• Technical writer</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
