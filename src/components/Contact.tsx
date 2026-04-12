import React, { useState } from "react";
import { personalInfo } from "../data";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xyzabcde", {
      // ← your endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSent(true);
    }
  };

  const socialLinks = [
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Twitter / X", href: personalInfo.twitter },
    { label: "Email", href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              06 — Contact
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-900 leading-snug mb-4">
              Let's talk
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed mb-8">
              Open to interesting problems, collaborations, and conversations. I
              try to reply within a few days.
            </p>

            <div className="space-y-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-600 hover:text-accent transition-colors group"
                >
                  <span className="w-4 h-px bg-ink-300 group-hover:bg-accent group-hover:w-6 transition-all" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            {sent ? (
              <div className="border border-ink-200 p-10 flex flex-col items-center justify-center text-center gap-3 h-full min-h-64">
                <div className="w-10 h-10 border-2 border-accent flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9622F"
                    strokeWidth="2.5"
                  >
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <p className="font-display text-lg font-semibold text-ink-900">
                  Message sent
                </p>
                <p className="text-sm text-ink-500">
                  Thanks for reaching out — I'll be in touch.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="font-mono text-xs text-ink-400 hover:text-accent mt-2 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-ink-500 uppercase tracking-widest block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-ink-500 uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-ink-500 uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="What's on your mind?"
                    className="w-full border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-accent text-white py-3 text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  Send message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
