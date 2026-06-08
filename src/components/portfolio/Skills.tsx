import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, Heart } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "HTML", level: 85 },
      { name: "React", level: 65 },
      { name: "CSS", level: 75 },
      { name: "Java Script", level: 65 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "c", level: 60 },
      { name: "Python ", level: 80 },
      { name: "JAVA ", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 50 },
      { name: "MongoDB", level: 62 },
      { name: "SQL Queries", level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "Vercel", level: 85 },
      { name: "Supa base", level: 78 },
      { name: "Firebase", level: 82 },
    ],
  },
];

const tools = ["Git", "VS Code", "Figma", "Power Bi", "Git hub","AI tools"];
const soft = ["Problem Solving", "Communication", "Adaptability", "Teamwork","prompt engineering", "Time Management"];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">My Toolkit</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A balanced mix of technical depth and interpersonal craft.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 transition-shadow hover:shadow-elegant"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:scale-105 transition-transform cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {soft.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-sm bg-secondary text-foreground border border-border hover:scale-105 transition-transform cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
