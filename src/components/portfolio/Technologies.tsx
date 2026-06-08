import { motion } from "framer-motion";

const techs = [
  { name: "Java", color: "#E76F00", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 17.5s-.8.5.6.6c1.6.2 2.5.2 4.3-.2 0 0 .5.3 1.1.5-3.9 1.7-8.9-.1-6-1zM8 15.5s-.9.7.5.8c1.8.2 3.2.2 5.6-.3 0 0 .3.3.8.5-5 1.5-10.5.1-6.9-1zM13.2 10.9c1 1.1-.3 2.2-.3 2.2s2.6-1.3 1.4-3c-1.1-1.6-2-2.4 2.7-5.1 0 0-7.4 1.9-3.8 5.9z"/><path d="M18.2 19.1s.6.5-.7.9c-2.4.7-10.1 1-12.2 0-.8-.3.7-.8.7-.8s-.8-.5-1.8-.3c-2.5.6 3.5 1.6 6 1.8 6.1.4 10.3-.5 8-1.6zM8.8 13s-3.8.9-1.3 1.2c1 .1 3-.1 4.8-.5 1.5-.3 3-.9 3-.9s-1.1.4-1.9.9c-7.6 2-11.2-.1-9.1-1 1.8-.7 4.5-.7 4.5-.7zM16.5 16.5c7.7-4 4.2-7.9 1.7-7.4-.6.1-.9.2-.9.2s.2-.4.7-.5c5.1-1.8 9.1 5.4-1.6 8.2 0-.1.1-.3.1-.5zM13.5 0s2.2 2.2-2.1 5.5c-3.4 2.7-.8 4.3 0 6-2-1.8-3.5-3.4-2.5-4.9C10.5 4.7 14.4 3.7 13.5 0z"/><path d="M9.1 21.9c7.4.5 18.8-.3 19-3.6 0 0-.5 1.3-6.1 2.3-6.3 1.1-14.1 1-18.7.3 0 0 .9.8 5.8 1z"/></svg>
  )},
  { name: "Python", color: "#3776AB", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.9 2C7.7 2 8 3.8 8 3.8V6h4v.7H5.7S3 6.4 3 10.7s2.3 4 2.3 4H7v-2s-.1-2.3 2.3-2.3h4s2.2.1 2.2-2.1V4.1S15.9 2 11.9 2zm-1.3 1.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/><path d="M12.1 22c4.2 0 3.9-1.8 3.9-1.8V18h-4v-.7h6.3S21 17.6 21 13.3s-2.3-4-2.3-4H17v2s.1 2.3-2.3 2.3h-4s-2.2-.1-2.2 2.1v3.2S8.1 22 12.1 22zm1.3-1.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"/></svg>
  )},
  { name: "MySQL", color: "#4479A1", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 16.3c-.7 0-1.2.1-1.6.3l-.5-.5c.5-.7.7-1.6.7-2.8 0-2.4-1.1-4.5-2.8-5.5.4-.3.8-.4 1.3-.4 2.1 0 3.7 2 3.7 4.6 0 .9-.2 1.7-.5 2.3l.5.5c.3-.1.7-.2 1.1-.2 1.5 0 2.7 1.1 2.7 2.4 0 1.4-1.2 2.5-2.7 2.5-.9 0-1.8-.4-2.3-1 .1-.2.2-.5.2-.8 0-.8-.4-1.4-.8-1.4zM8 5C5.8 5 4 6.3 4 8s1.8 3 4 3 4-1.3 4-3S10.2 5 8 5zm0 4.5c-1.5 0-2.5-.7-2.5-1.5S6.5 6.5 8 6.5s2.5.7 2.5 1.5S9.5 9.5 8 9.5zm0 2C5.8 11.5 4 12.8 4 14.5S5.8 17 8 17s4-1.3 4-2.5S10.2 11.5 8 11.5zm0 4c-1.5 0-2.5-.7-2.5-1.5S6.5 14 8 14s2.5.7 2.5 1.5S9.5 15.5 8 15.5z"/></svg>
  )},
  { name: "TypeScript", color: "#3178C6", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3"/><text x="12" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">TS</text></svg>
  )},
  { name: "HTML", color: "#E34F26", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3l1.6 18L12 23l6.4-2L20 3H4zm13.2 6H8.8l.2 2h8l-.6 6.5L12 19l-4.4-1.5-.3-3.5h2l.1 1.8 2.6.7 2.6-.7.3-3H8.4L7.8 7h8.6l-.2 2z"/></svg>
  )},
  { name: "AI Tools", color: "#8B5CF6", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zM4 8a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm16 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zM6.5 4.5l3 3M14.5 4.5l-3 3M6.5 19.5l3-3M14.5 19.5l-3-3M4.5 10.5l3 .5M16.5 10.5l-3 .5"/><circle cx="12" cy="12" r="3"/></svg>
  )},
  { name: "AI Technologies", color: "#06B6D4", svg: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  )},
];

export function Technologies() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Technologies
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.12, y: -6 }}
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-card glass-card transition-all duration-300 group-hover:shadow-glow animate-float"
                style={{ color: t.color, animationDelay: `${i * 0.3}s` }}
              >
                <div className="w-9 h-9">{t.svg}</div>
              </div>
              <span className="text-sm font-medium text-foreground">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
