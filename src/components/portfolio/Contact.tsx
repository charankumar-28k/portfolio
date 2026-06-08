import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";


const MY_PHONE    = "+91 9791696638";          
const MY_WHATSAPP = "919791696638";                 
const MY_EMAIL    = "charankumarc969@gmail.com";              
const MY_GITHUB   = "https://github.com/charankumar-28k";              
const MY_LINKEDIN = "https://www.linkedin.com/in/charankumarn/";            
const MY_INSTAGRAM= "https://www.instagram.com/_.charan._01_/?hl=en";           

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(7, "Enter a valid number").max(15),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    const text = encodeURIComponent(
      `Hi Charan! I'm ${form.name} (${form.phone}).\n\n${form.message}`
    );
    window.open(`https://wa.me/${MY_WHATSAPP}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your message!");
    setForm({ name: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-script text-2xl text-primary">Let's Talk</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Get In Touch</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail,           label: "Email",     value: MY_EMAIL,    href: `https://mail.google.com/mail/?view=cm&to=${MY_EMAIL}` },
              { icon: Phone,          label: "Call",      value: MY_PHONE,    href: `tel:${MY_PHONE.replace(/\s/g,"")}` },
              { icon: MessageCircle,  label: "WhatsApp",  value: MY_PHONE,    href: `https://wa.me/${MY_WHATSAPP}` },
              { icon: MapPin,         label: "Location",  value: "Tamil Nadu, India", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium text-foreground">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-2xl p-5">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow me</div>
              <div className="flex gap-2">
                {[
                  { Icon: Github,    href: MY_GITHUB,    label: "GitHub" },
                  { Icon: Linkedin,  href: MY_LINKEDIN,  label: "LinkedIn" },
                  { Icon: Instagram, href: MY_INSTAGRAM, label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Your WhatsApp Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={15}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={10}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant transition-all hover:scale-105 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Opening WhatsApp..." : (
                <>
                  Send via WhatsApp
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
