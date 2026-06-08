import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import schoolResult from "@/assets/12 marksheet (1).jpg.jpeg";
import { useState } from "react";

const education = [
  {
    degree: "B.tech - Artificial Intelligence & Data Science",
    school: "Mahendra Engineering College - Namakkal",
    year: "2024 — 2028",
    currentYear: "2nd Year",
    gpa: "CGPA: 8.10 / 10.0",
    extra: null,
    result: null,
  },
  {
    degree: "High School",
    school: "GOVT HIGHER SECONDARY SCHOOL BERIKAI",
    year: "2022 — 2024",
    currentYear: null,
    gpa: "Result: 69.66%",
    extra: "Group: MPCB",
    result: schoolResult,
  },
];

export function Education() {
  const [preview, setPreview] = useState(false);

  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Academic Background</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 transition-shadow hover:shadow-elegant"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{e.degree}</h3>
                  <p className="text-muted-foreground">{e.school}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm">
                    <span className="text-primary font-medium">{e.year}</span>
                    {e.currentYear && <><span className="text-muted-foreground">·</span><span className="text-muted-foreground">{e.currentYear}</span></>}
                    {e.gpa && <><span className="text-muted-foreground">·</span><span className="text-muted-foreground">{e.gpa}</span></>}
                    {e.extra && <><span className="text-muted-foreground">·</span><span className="text-muted-foreground">{e.extra}</span></>}
                  </div>
                </div>
              </div>

{e.result && (
                <button
                  onClick={() => setPreview(true)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2 text-sm font-medium shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
                >
                  View Result
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setPreview(false)}
        >
          <div className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreview(false)}
              className="sticky top-2 left-full ml-auto flex w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center text-lg font-bold z-10 shadow-lg"
            >
              ×
            </button>
            <img src={schoolResult} alt="School Result" className="w-full rounded-2xl shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}
