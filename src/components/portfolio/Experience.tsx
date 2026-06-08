import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "assisted",
    company: "TechCorp Inc.",
    period: "2024 — Present",
    type: "Full-time",
    points: [
      "Designed and developed a full-stack Music Room web platform independently, implementing user authentication, music streaming features, and responsive UI/UX.",
"Led end-to-end development of a music-focused web application, managing architecture, frontend, backend, and database integration from concept to near-production completion.",
"Built and optimized a scalable music-sharing platform with modern web technologies, delivering core features and preparing the application for deployment."
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "EduNexus – Staff Attendance Portal",
    period: "2022 — 2024",
    type: "Full-time",
    points: [
      "Contributed to the development of a staff attendance management system.",
      "Implemented attendance tracking and staff record management features.",
      "Collaborated with the team to deliver reliable and user-friendly solutions.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Friends Start – E-Commerce Platform",
    period: "Summer 2022",
    type: "Internship",
    points: [
      "Developed and maintained responsive e-commerce web pages and user interfaces.",
      "Implemented product listings, shopping cart, and checkout-related features.",
      "Collaborated with the team to enhance user experience and optimize website performance.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Career Journey</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-6" />
              <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}>
                <div className={`glass-card rounded-2xl p-6 hover:shadow-elegant transition-all hover:-translate-y-1 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.type} · {exp.period}
                  </div>
                  <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                  <p className="text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
