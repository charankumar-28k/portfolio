import { Github, Linkedin, Instagram, Mail } from "lucide-react";


const MY_GITHUB    = "https://github.com/charankumar-28k";
const MY_LINKEDIN  = "https://www.linkedin.com/in/charankumarn/";
const MY_INSTAGRAM = "https://www.instagram.com/_.charan._01_/?hl=en";
const MY_EMAIL     = "charankumarc969@gmail.com";


const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <span className="font-display text-3xl font-bold text-gradient-primary">Charan kumar N</span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Building fast, efficient, and scalable web applications that solve real-world problems.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Connect</h4>
          <div className="flex gap-2 mb-4">
            {[
              { Icon: Instagram, href: MY_INSTAGRAM },
              { Icon: Github,    href: MY_GITHUB },
              { Icon: Linkedin,  href: MY_LINKEDIN },
              { Icon: Mail,      href: `https://mail.google.com/mail/?view=cm&to=${MY_EMAIL}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label="social"
                className="w-10 h-10 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110 flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{MY_EMAIL}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} CK - All rights reserved.</span>
          <span>Designed & built with passion.</span>
        </div>
      </div>
    </footer>
  );
}
