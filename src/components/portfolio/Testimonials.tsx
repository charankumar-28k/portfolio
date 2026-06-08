import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "One of the most talented engineers I've ever worked with. Delivers complex projects ahead of schedule with exceptional quality.",
    name: "Sarah Johnson",
    role: "VP of Engineering, TechCorp",
    initials: "SJ",
  },
  {
    quote: "Brings rare combination of technical depth and product intuition. Our platform wouldn't be where it is without their leadership.",
    name: "Michael Chen",
    role: "CTO, StartupHub",
    initials: "MC",
  },
  {
    quote: "An incredible mentor. Patient, thorough, and always pushes the team to do their best work. A true 10x engineer.",
    name: "Priya Patel",
    role: "Engineering Manager, InnovateLabs",
    initials: "PP",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Kind Words</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 relative hover:shadow-elegant transition-all"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
