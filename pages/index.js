import Head from 'next/head'
import Header from '../components/Header'
import VantaBG from '../components/VantaBG'
import Overview from '../components/Overview'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import GamingSetup3D from '../components/GamingSetup3D'
import { FaCode, FaGamepad, FaCloud, FaRocket, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Faris</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <VantaBG />
      <Header />
      <main>
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
                  href="https://github.com/"
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
        {/* Place the 3D Gaming Setup section immediately after the hero section */}
        <section id="gaming-setup" data-aos="fade-right" data-aos-delay="150" style={{ marginTop: '-7%'}}>
          <GamingSetup3D />
        </section>
        <section id="overview" data-aos="fade-right" data-aos-delay="400">
          <Overview />
        </section>
        <section id="about" data-aos="fade-left" data-aos-delay="400">
          <About />
        </section>
        <section id="projects" data-aos="fade-up" data-aos-delay="400">
          <Projects />
        </section>
        <section id="contact" data-aos="fade-up" data-aos-delay="500">
          <Contact />
        </section>
      </main>
    </>
  )
}
