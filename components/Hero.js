import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="top" className="hero" data-reveal>
      <div className="hero-kicker">SOFTWARE ENGINEER II — JPMORGAN CHASE &amp; CO.</div>
      <h1 className="hero-heading">
        Faris Attallah builds <em>backend systems</em> that hold up under real load.
      </h1>
      <p className="hero-desc">
        I work on payment infrastructure at JPMorgan Chase — currently the Apple Card Monthly
        Installments integration, processing millions of transactions a month. Before that: cloud
        migrations and internal tooling at M&amp;T Bank, and Salesforce integrations at FusionSpan.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-line is-accent">View Projects</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-line">Resume (PDF)</a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/FarisAttallah" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/faris-attallah-618075244/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:fattallah22@gmail.com" className="hero-social-icon" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <div className="margin-note">
        <span className="tag">NOTE —</span>
        outside of banking infrastructure, I build video games on my own time. One placed Top 20
        of 56 in a community contest — more to come as I finish them. <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3513305479" target="_blank" rel="noopener noreferrer">Details in Projects ↓</a>
      </div>
    </section>
  );
}
