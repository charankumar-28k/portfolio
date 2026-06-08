import { motion } from "framer-motion";
import { Download, Target, User, Briefcase, Eye } from "lucide-react";
import resumePdf from "@/assets/Resume (1).pdf?url";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl glass-card p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-40" style={{ background: "var(--gradient-blob)" }} />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <span className="font-script text-3xl text-primary">About Me</span>
                <h3 className="font-display text-4xl font-bold mt-2 leading-tight">
                  Crafting digital<br />experiences that<br />
                  <span className="text-gradient-primary">matter.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">I'm a passionate Full Stack Developer focused on creating modern web applications and digital experiences. Through personal projects and continuous learning, I've developed skills in both frontend and backend development. I'm currently open to freelance work, internships, collaborations, and opportunities to contribute to real-world projects. I enjoy building responsive, user-friendly applications that combine clean design with efficient functionality. Constantly exploring new technologies, I strive to enhance my problem-solving abilities and stay updated with industry trends. My goal is to create impactful digital solutions that deliver seamless user experiences and real-world value.
  </p>
               
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="text-3xl font-display font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years coding</div>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="text-3xl font-display font-bold text-primary">2</div>
                  <div className="text-xs text-muted-foreground">Projects Working on</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
           A passionate student developer building modern web experiences.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
  AI & DS student with a strong interest in full-stack development.
Focused on creating modern web applications and scalable solutions.
</p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Briefcase, title: "Professional Summary", desc: "Second-year AI & DS student building full-stack projects and continuously learning modern technologies." },
              { icon: Target, title: "Career Goals", desc: "To become a skilled full-stack engineer, building innovative and scalable digital solutions." },
              { icon: User, title: "Background", desc: "B.Tech student in Artificial Intelligence & Data Science. Passionate about UI/UX design, backend development, database systems, and lifelong learning through hands-on projects." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3.5 font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:scale-105"
            >
              <Eye className="w-4 h-4" />
              View Resume
            </a>
            <a
              href={resumePdf}
              download="Charan_Kumar_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
