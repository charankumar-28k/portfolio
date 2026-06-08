import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ethicalHackingPdf from "@/assets/10190858_Ethical_hacking_101___Beginners_guide_to_Ethical_hacking_10250425-1.pdf?url";
import powerBIPdf from "@/assets/9153080_Power_BI_for_Beginners_9135400.pdf?url";

import ethicalHackingImg from "@/assets/ethical hackibng.png?url";
import powerBIImg from "@/assets/power bi.png?url";
import pythonImg from "@/assets/python.png?url";

const certs = [
  {
    name: "Ethical Hacking 101 - Beginners Guide",
    org: "simple learn",
    date: "",
    img: ethicalHackingImg,
    pdf: ethicalHackingPdf,
    link: "https://simpli.app.link/UTKNRznVN3b", // 🔗 replace with certificate verify URL
  },
  {
    name: "Power BI for Beginners",
    org: "simple learn",
    date: "",
    img: powerBIImg,
    pdf: powerBIPdf,
    link: "https://simpli.app.link/OQhNWWDVN3b", // 🔗 replace with certificate verify URL
  },
  {
    name: "Python",
    org: "geeksforgeeks",
    date: "",
    img: pythonImg,
    pdf: pythonImg,
    link: "https://media.geeksforgeeks.org/courses/certificates/3aad8ad790de5d62381eff367c58dd36.pdf", // 🔗 replace with certificate verify URL
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Credentials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-elegant transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground leading-snug">{c.name}</h3>
                {c.org && <p className="text-sm text-muted-foreground mt-1">{c.org}</p>}
                <div className="flex items-center justify-between mt-4 gap-3">
                  <span className="text-xs text-muted-foreground">{c.date}</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={c.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                    >
                      View PDF <ExternalLink className="w-3 h-3" />
                    </a>
                    {c.link !== "#" && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
