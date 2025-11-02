import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import resumeImage from "../../src/assets/Resume.jpg"; //  Your resume image file

const Resume = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeImage;
    link.download = "Resume.jpg"; //  Downloaded file name
    link.click();
  };

  const handleViewOnline = () => {
    window.open(resumeImage, "_blank"); //  Opens in a new tab
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon Section */}
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

          {/* Title */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Resume
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            View or download my resume to learn more about my skills and background.
            Available as a high-quality image for easy sharing.
          </motion.p>

          {/* Buttons */}
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
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              onClick={handleViewOnline}
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
            <h2 className="text-2xl font-bold mb-6 text-primary">Resume Preview</h2>
             <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 rounded-xl bg-card border border-primary/20"
          >
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• I'am Freasher in web development</li>
                  <li>• Freasher in a Figma</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Education</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bachelor's in Computer Science</li>
                  <li>• 12'th GOVT Boys school</li>
                  <li>• 10'th GOVT Boys school</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React, JavaScript, Python</li>
                  <li>• Cloud platforms (AWS)</li>
                  <li>• MongoDb</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 10+ successful projects</li>
                  <li>• JavaScript Cetrificate</li>
                  <li>• MongoDB finish Cetrificate</li>
                </ul>
              </div>
            </div>
          </motion.div>
     

           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
