import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-16 flex flex-col items-center justify-center text-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">Coming Soon</h3>
          <p className="text-muted-foreground max-w-sm">
            Exciting projects are currently in the works. Stay tuned — they'll be live here soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
