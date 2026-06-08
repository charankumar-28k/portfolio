import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-50 animate-blob"
          style={{ background: "var(--gradient-blob)" }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 animate-blob"
          style={{ background: "var(--gradient-blob)", animationDelay: "5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--color-border)_1px,_transparent_0)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="font-script text-3xl text-primary mb-4"
          >
            Hey, I'm Charan kumar
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-foreground"
          >
           Transforming Ideas<br /> 
            Into Digital <br />
            <span className="font-script font-normal text-4xl md:text-5xl lg:text-6xl text-gradient-primary inline-block mt-2 pt-4 pb-4">
              Reality..
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-1 text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            I build fast, efficient and scalable web applications that solve real-world problems.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-0 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-primary/30 px-7 py-3.5 font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-glow-pulse" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 rounded-full bg-primary-glow/20 blur-2xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

            <svg className="absolute -bottom-4 left-0 w-32 h-32 text-primary/40" viewBox="0 0 100 100" fill="currentColor">
              {Array.from({ length: 8 }).map((_, i) =>
                Array.from({ length: 8 }).map((_, j) => (
                  <circle key={`${i}-${j}`} cx={i * 12 + 4} cy={j * 12 + 4} r="1.5" />
                ))
              )}
            </svg>

            <img
              src={portrait}
              alt="CB - Developer Portrait"
              className="relative w-[336px] md:w-[420px] object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
