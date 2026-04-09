import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ArrowUpRight } from "lucide-react";

const CONTACT_INFO = [
  {
    Icon: Mail,
    label: "Email",
    value: "bhautikmerndevelopers@gmail.com",
    href: "mailto:bhautikmerndevelopers@gmail.com",
    color: "var(--brand-1)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 9904656110",
    href: "tel:+919904656110",
    color: "var(--brand-6)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Surat, Gujarat, India",
    href: "https://www.google.com/maps/place/Surat,+Gujarat",
    color: "var(--brand-2)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
];

const SOCIAL = [
  {
    Icon: Github,
    label: "GitHub",
    href: "https://github.com/BhautikDavariya",
    color: "var(--brand-2)",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhautik-davariya-15b2b722a/",
    color: "var(--brand-1)",
  },
  {
    Icon: Mail,
    label: "Email",
    href: "mailto:bhautikmerndevelopers@gmail.com",
    color: "var(--brand-6)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mldldykr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      // silently fail — in production add a toast
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm bg-transparent outline-none transition-all duration-300";
  const inputStyle = {
    background: "var(--hover-white-overlay)",
    border: "1px solid var(--border-brand-soft)",
    color: "var(--text-base)",
  };
  const inputBorderDefault = "var(--border-brand-soft)";

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--brand-rgb),0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--brand-rgb),0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(var(--brand-rgb),0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--brand-1)" }}>
            Let's work together
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: "var(--text-strong)" }}>Get In </span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--brand-2), var(--brand-1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <div
            className="w-14 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, var(--brand-4), var(--brand-1))" }}
          />
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
            I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
              >
                Contact Information
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Reach out through any of these channels and I'll get back to you within 24 hours.
              </p>
            </div>

            {CONTACT_INFO.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Location" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-brand-soft)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `color-mix(in srgb, ${c.color} 19%, transparent)`;
                  e.currentTarget.style.background = "var(--surface-2-strong)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-brand-soft)";
                  e.currentTarget.style.background = "var(--surface-2)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.bg }}
                >
                  <c.Icon className="w-4 h-4" style={{ color: c.color }} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{c.label}</div>
                  <div className="text-sm font-medium transition-colors" style={{ color: "var(--text-soft)" }}>
                    {c.value}
                  </div>
                </div>
                <ArrowUpRight
                  className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: c.color }}
                />
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Find me on</p>
              <div className="flex gap-3">
                {SOCIAL.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{
                      border: "1px solid var(--border-base)",
                      background: "var(--hover-white-overlay)",
                      color: "var(--text-dim)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = `color-mix(in srgb, ${s.color} 22%, transparent)`;
                      e.currentTarget.style.background = `color-mix(in srgb, ${s.color} 6%, transparent)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-dim)";
                      e.currentTarget.style.borderColor = "var(--border-base)";
                      e.currentTarget.style.background = "var(--hover-white-overlay)";
                    }}
                    aria-label={s.label}
                  >
                    <s.Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-brand-soft)",
                backdropFilter: "blur(20px)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(var(--brand-rgb),0.15)" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "var(--brand-1)" }} />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}>
                    Message Sent!
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={{
                      color: "var(--brand-2)",
                      border: "1px solid var(--border-brand-strong)",
                    }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label className="text-xs mb-1.5 block capitalize" style={{ color: "var(--text-muted)" }}>
                          {field} <span style={{ color: "var(--brand-1)" }}>*</span>
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={form[field]}
                          onChange={handleChange}
                          placeholder={field === "name" ? "Your name" : "your@email.com"}
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors[field] ? "rgba(239,68,68,0.5)" : inputBorderDefault,
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "rgba(var(--brand-rgb),0.5)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(var(--brand-rgb),0.08)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = errors[field] ? "rgba(239,68,68,0.5)" : inputBorderDefault;
                            e.currentTarget.style.boxShadow = "";
                          }}
                        />
                        {errors[field] && (
                          <p className="text-[10px] mt-1" style={{ color: "#f87171" }}>{errors[field]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "var(--text-muted)" }}>
                      Subject <span style={{ color: "var(--brand-1)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        borderColor: errors.subject ? "rgba(239,68,68,0.5)" : inputBorderDefault,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(var(--brand-rgb),0.5)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(var(--brand-rgb),0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.subject ? "rgba(239,68,68,0.5)" : inputBorderDefault;
                        e.currentTarget.style.boxShadow = "";
                      }}
                    />
                    {errors.subject && (
                      <p className="text-[10px] mt-1" style={{ color: "#f87171" }}>{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "var(--text-muted)" }}>
                      Message <span style={{ color: "var(--brand-1)" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`${inputClass} resize-none`}
                      style={{
                        ...inputStyle,
                        borderColor: errors.message ? "rgba(239,68,68,0.5)" : inputBorderDefault,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(var(--brand-rgb),0.5)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(var(--brand-rgb),0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : inputBorderDefault;
                        e.currentTarget.style.boxShadow = "";
                      }}
                    />
                    {errors.message && (
                      <p className="text-[10px] mt-1" style={{ color: "#f87171" }}>{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={!submitting ? { scale: 1.02, y: -1 } : {}}
                    whileTap={!submitting ? { scale: 0.97 } : {}}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                    style={{
                      color: "#ffffff",
                      background: submitting
                        ? "rgba(var(--brand-rgb),0.5)"
                        : "linear-gradient(135deg, var(--brand-5), var(--brand-4), var(--brand-1))",
                      boxShadow: submitting ? "none" : "0 0 25px rgba(var(--brand-rgb),0.35)",
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.boxShadow = "0 0 40px rgba(var(--brand-rgb),0.55), 0 8px 25px rgba(var(--brand-rgb),0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.boxShadow = "0 0 25px rgba(var(--brand-rgb),0.35)";
                      }
                    }}
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 rounded-full"
                          style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "white" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
