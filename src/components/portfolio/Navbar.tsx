import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Moon, Sun } from "lucide-react";


const MY_GITHUB    = "https://github.com/charankumar-28k";
const MY_LINKEDIN  = "https://www.linkedin.com/in/charankumarn/";
const MY_INSTAGRAM = "https://www.instagram.com/_.charan._01_/?hl=en";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-card" : "bg-transparent"
          }`}
        >
          <a href="#home" className="text-2xl font-bold tracking-tight text-gradient-primary font-display">
            Charan Kumar N
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => {
                  setActive(l);
                  const id = l.toLowerCase();
                  const el = document.getElementById(id);
                  if (el) {
                    el.classList.remove("section-flash");
                    void el.offsetWidth;
                    el.classList.add("section-flash");
                    window.setTimeout(() => el.classList.remove("section-flash"), 1200);
                  }
                }}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-primary rounded-full origin-left transition-transform duration-300 ${
                    active === l ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {[
              { Icon: Instagram, href: MY_INSTAGRAM },
              { Icon: Github,    href: MY_GITHUB },
              { Icon: Linkedin,  href: MY_LINKEDIN },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all hover:scale-110"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
