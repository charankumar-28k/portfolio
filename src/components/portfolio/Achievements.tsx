import { motion } from "framer-motion";
import { Trophy, Medal, Star, Zap } from "lucide-react";

const items = [
  { icon: Trophy, title: "", desc: "no participation still now.", color: "from-amber-500/20 to-orange-500/20" },
//   { icon: Medal, title: "Top 10 — Google Code Jam", desc: "Finished in the top 10 of a 10,000-developer global competition.", color: "from-blue-500/20 to-indigo-500/20" },
//   { icon: Star, title: "Open Source MVP — 2023", desc: "Recognized contributor to React ecosystem with 5k+ GitHub stars.", color: "from-purple-500/20 to-pink-500/20" },
//   { icon: Zap, title: "Speaker — ReactConf '24", desc: "Delivered a talk on server components to an audience of 1,500.", color: "from-emerald-500/20 to-teal-500/20" },
 ];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Milestones</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Achievements & Awards</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative glass-card rounded-2xl p-6 overflow-hidden hover:shadow-elegant transition-all"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${it.color} blur-2xl`} />
              <div className="relative flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-elegant">
                  <it.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
