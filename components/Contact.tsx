"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import useAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: "Portfolio Contact",
          from_email: form.email,
          to_email: "", // optional if your EmailJS template handles recipient
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setLoading(false);
      showAlert({ text: "Thank you for your message 😃", type: "success" });

      setTimeout(() => {
        hideAlert();
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setLoading(false);
      showAlert({ text: "I didn't receive your message 😢", type: "danger" });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col w-full">
        {/* Background image to match provided style */}
        <img src="terminal.png" alt="terminal-bg" className="inset-0 min-h-screen" />

        <div className="contact-container w-full -mt-[380px] md:-mt-[790px]">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
