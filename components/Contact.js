import { FaEnvelope, FaLinkedin, FaPaperPlane, FaRegSmile } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-flex">
        {/* Left: Contact Form */}
        <div className="contact-form-container">
          <form
            action="https://formspree.io/f/xwkgqjzq"
            method="POST"
            className="contact-form"
          >
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" required rows={5} />
            </label>
            <button type="submit">
              <FaPaperPlane style={{ fontSize: 18 }} />
              Send Message
            </button>
          </form>
          <div className="contact-links">
            <a
              href="mailto:fattallah@gmail.com"
              className="contact-link"
            >
              <FaEnvelope className="contact-link-icon" style={{ color: "#915EFF" }} />
              fattallah@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/faris-attallah-618075244/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-link-icon" style={{ color: "#0A66C2" }} />
              LinkedIn
            </a>
          </div>
        </div>
        {/* Right: Enhanced Animated Icon/Professional Illustration */}
        <div className="contact-anim-container">
          <div className="contact-anim-circle">
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: "relative", zIndex: 1 }}>
              <circle cx="60" cy="60" r="54" fill="#23243a" opacity="0.95" />
            </svg>
            <FaEnvelope className="contact-anim-envelope" />
            <FaPaperPlane className="contact-anim-plane" />
            <span className="contact-anim-sparkle1" />
            <span className="contact-anim-sparkle2" />
            <span className="contact-anim-sparkle3" />
            <FaRegSmile className="contact-anim-smile" />
          </div>
        </div>
      </div>
    </section>
  );
}