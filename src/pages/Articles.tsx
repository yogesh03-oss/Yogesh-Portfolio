import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring large-scale React applications with proper state management and component architecture.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "Deep dive into JavaScript generics and how they can make your code more reusable and type-safe.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop"
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS features like Grid, Flexbox, and custom properties to create responsive layouts.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop"
  },
  {
    title: "Python Performance Optimization",
    excerpt: "Tips and tricks to optimize your Python applications for better performance and scalability.",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Articles
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {article.excerpt}
                    </p>

                    <Button variant="ghost" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles; 
