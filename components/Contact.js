export default function Contact() {
  return (
    <section id="contact" data-reveal>
      <div className="section-label"><span>05 / CONTACT</span><span className="rule" /></div>
      <h2 className="section-heading">Let&apos;s talk</h2>
      <p className="section-subtext">
        Not actively job-hunting, but always open to interesting conversations. Reach out.
      </p>

      <div className="contact-grid">
        <form action="https://formspree.io/f/xwkgqjzq" method="POST" className="contact-form">
          <label>
            NAME
            <input type="text" name="name" required />
          </label>
          <label>
            EMAIL
            <input type="email" name="email" required />
          </label>
          <label>
            MESSAGE
            <textarea name="message" required rows={4} />
          </label>
          <button type="submit" className="btn-line is-accent">Send Message →</button>
        </form>

        <div className="contact-links">
          <a href="mailto:fattallah22@gmail.com" className="contact-link-row">
            <span className="contact-link-label">EMAIL</span>
            <span className="contact-link-value">fattallah22@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/faris-attallah-618075244/" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <span className="contact-link-label">LINKEDIN</span>
            <span className="contact-link-value">faris-attallah ↗</span>
          </a>
          <a href="https://github.com/FarisAttallah" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <span className="contact-link-label">GITHUB</span>
            <span className="contact-link-value">FarisAttallah ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
