import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Calendar, CheckCircle2, Users, Headphones } from "lucide-react";

const stats = [
  { icon: Calendar, value: 3, suffix: "+", label: "Years Experience" },
  { icon: CheckCircle2, value: 2, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 1, suffix: "+", label: "Happy Clients" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="px-6 -mt-28 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl glass-card rounded-3xl p-8 md:p-10 shadow-elegant"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-border/60">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-4 ${i > 0 ? "md:pl-8" : ""}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
