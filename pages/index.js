import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import VantaBG from '../components/VantaBG'
import Overview from '../components/Overview'
import { FaCode, FaGamepad, FaCloud, FaRocket, FaGithub, FaLinkedin, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Faris</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <VantaBG />
      <Header />
      <main className="home-container">
        {/* --- HERO SECTION --- */}
        <section className="hero-title" data-aos="fade-up">
          <div className="hero-flex">
            {/* Animated Left Accent */}
            <div className="hero-accent hero-accent-left">
              <div className="hero-accent-dot hero-accent-dot-left" />
              <div className="hero-accent-bar hero-accent-bar-left" />
            </div>
            {/* Main Hero Content */}
            <div className="hero-content">
              {/* Animated Emoji/Icons Row */}
              <div className="hero-icons-row">
                <span className="hero-icon" title="Code"><FaCode color="#915EFF" /></span>
                <span className="hero-icon" style={{ animationDelay: "0.2s" }} title="Game"><FaGamepad color="#fbbf24" /></span>
                <span className="hero-icon" style={{ animationDelay: "0.4s" }} title="Cloud"><FaCloud color="#7dd3fc" /></span>
                <span className="hero-icon" style={{ animationDelay: "0.6s" }} title="Rocket"><FaRocket color="#ff50c8" /></span>
              </div>
              <h1 className="hero-heading">
                Hi, I&apos;m <span className="hero-gradient-text">Faris</span>
                <span className="hero-wave">👋</span>
              </h1>
              <p className="hero-desc">
                <span className="hero-highlight-yellow">Full Stack Engineer</span> & builder of creative digital experiences.<br />
                I craft <span className="hero-highlight-purple">robust backends</span>, <span className="hero-highlight-pink">intuitive UIs</span>, and <span className="hero-highlight-blue">cloud solutions</span>.<br />
                <span style={{ opacity: 0.85 }}>Let&apos;s build something <span className="hero-highlight-pink">awesome</span> together.</span>
              </p>
              {/* Social Buttons */}
              <div className="hero-socials">
                <a
                  href="https://github.com/FarisAttallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn hero-social-github"
                >
                  <FaGithub style={{ fontSize: 22 }} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/faris-attallah-618075244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn hero-social-linkedin"
                >
                  <FaLinkedin style={{ fontSize: 22 }} />
                  LinkedIn
                </a>
              </div>
            </div>
            {/* Animated Right Accent */}
            <div className="hero-accent hero-accent-right">
              <div className="hero-accent-dot hero-accent-dot-right" />
              <div className="hero-accent-bar hero-accent-bar-right" />
            </div>
          </div>
          {/* Decorative floating shapes */}
          <div className="hero-float hero-float-left" />
          <div className="hero-float hero-float-right" />
        </section>

        {/* --- OVERVIEW SECTION --- */}
        <section id="overview" data-aos="fade-up" data-aos-delay="300">
          <Overview />
        </section>

        {/* --- NAVIGATION BUTTONS --- */}
        <section className="home-navigation" data-aos="fade-up" data-aos-delay="400">
          <div className="nav-grid">
            <Link href="/about" className="nav-card">
              <div className="nav-card-icon">
                <FaUser />
              </div>
              <h3>About Me</h3>
              <p>Learn about my journey and experience</p>
              <div className="nav-card-arrow">→</div>
            </Link>
            
            <Link href="/projects" className="nav-card">
              <div className="nav-card-icon">
                <FaProjectDiagram />
              </div>
              <h3>My Projects</h3>
              <p>Explore my work and achievements</p>
              <div className="nav-card-arrow">→</div>
            </Link>
            
            <Link href="/contact" className="nav-card">
              <div className="nav-card-icon">
                <FaEnvelope />
              </div>
              <h3>Contact</h3>
              <p>Let's work together</p>
              <div className="nav-card-arrow">→</div>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
