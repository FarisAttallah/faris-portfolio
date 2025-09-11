import { useEffect, useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaReact, FaCogs, FaEye, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiJest } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { TiVendorMicrosoft } from "react-icons/ti";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      subtitle: "Next.js • React • Three.js",
      category: "Web Development",
      image: "/images/projects/Portfolio_img.png",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      description:
        "A modern, responsive portfolio website built from scratch featuring 3D animations, glassmorphism design, and smooth interactions. Showcases full-stack development skills with Next.js and creative UI/UX design.",
      longDescription: `This portfolio represents a complete redesign and rebuild of my personal brand. Built with modern web technologies, it features:

• **Next.js Framework**: Server-side rendering and optimal performance
• **3D Animations**: Interactive Three.js elements and animations  
• **Responsive Design**: Mobile-first approach with perfect scaling
• **Modern UI/UX**: Glassmorphism effects and smooth transitions
• **Performance Optimized**: Lighthouse score of 95+ across all metrics

The site serves as both a showcase of my work and a demonstration of my technical abilities in modern web development.`,
      techStack: [
        { name: "React", icon: <FaReact color="#61dafb" />, color: "#61dafb" },
        { name: "Next.js", icon: <SiNextdotjs color="#fff" />, color: "#fff" },
        { name: "Three.js", icon: <FaCogs color="#b6aaff" />, color: "#b6aaff" },
      ],
      links: [
        { href: "https://github.com/FarisAttallah/faris-portfolio", label: "GitHub", icon: <FaGithub /> },
        { href: "#", label: "Live Demo", icon: <FaExternalLinkAlt /> },
      ],
      features: ["Responsive Design", "3D Animations", "Modern UI/UX", "Performance Optimized"],
      status: "Live"
    },
    {
      id: 2,
      title: "Integration Testing Framework",
      subtitle: "Enterprise • Microservices • M&T Bank",
      category: "Enterprise Software",
      image: "/images/projects/Integration-Testing.png",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      description:
        "Enterprise-grade testing framework for microservices architecture. Automated end-to-end testing scenarios with improved reliability and faster CI/CD pipeline integration.",
      longDescription: `Developed a comprehensive integration testing framework for M&T Bank's microservices ecosystem:

• **Microservices Testing**: End-to-end test automation across multiple services
• **CI/CD Integration**: Seamless pipeline integration with Azure DevOps
• **Reliability Improvements**: 95% reduction in false positives
• **Performance**: 60% faster test execution compared to legacy systems
• **Scalability**: Supports testing of 50+ microservices simultaneously

This framework became the standard for integration testing across the organization, improving deployment confidence and reducing production issues.`,
      techStack: [
        { name: "Jest", icon: <SiJest color="#e34c26" />, color: "#e34c26" },
        { name: "Automation", icon: <FaCogs color="#7dd3fc" />, color: "#7dd3fc" },
        { name: "Azure DevOps", icon: <VscAzureDevops color="#0078d4" />, color: "#0078d4" },
      ],
      links: [],
      features: ["Microservices Testing", "CI/CD Integration", "Automated Reporting", "Scalable Architecture"],
      status: "Enterprise"
    },
    {
      id: 3,
      title: "Azure Blob Storage Migration",
      subtitle: "Cloud Architecture • Azure • M&T Bank",
      category: "Cloud Infrastructure",
      image: "/images/projects/Azure-header.jpg",
      color: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
      description:
        "Led migration from legacy clustered file systems to modern Azure Blob Storage. Designed and implemented scalable cloud architecture with improved performance and cost efficiency.",
      longDescription: `Spearheaded a critical infrastructure migration project at M&T Bank:

• **Legacy System Migration**: Transitioned from clustered file systems to Azure Blob Storage
• **Architecture Design**: Created scalable, fault-tolerant cloud storage solutions
• **Performance Gains**: 40% improvement in data access speeds
• **Cost Optimization**: 30% reduction in storage costs
• **Documentation**: Comprehensive migration guides and best practices
• **Team Leadership**: Coordinated cross-functional teams across multiple departments

The migration enhanced system reliability, reduced operational overhead, and positioned the organization for future cloud-native initiatives.`,
      techStack: [
        { name: "Microsoft Azure", icon: <TiVendorMicrosoft color="#2563eb" />, color: "#2563eb" },
        { name: "Cloud Migration", icon: <FaCogs color="#2563eb" />, color: "#2563eb" },
      ],
      links: [],
      features: ["Cloud Migration", "Performance Optimization", "Cost Reduction", "Team Leadership"],
      status: "Enterprise"
    },
    {
      id: 4,
      title: "Sahoor of the Damned",
      subtitle: "Call of Duty: Black Ops 3 • Custom Zombies Map",
      category: "Game Development",
      image: "/images/projects/black_ops3.jpg",
      color: "#f97316",
      gradient: "linear-gradient(135deg, #fbbf24, #F59E0B)",
      description:
        "A chaotic, boss-heavy custom Zombies map featuring over-the-top enemies, custom mechanics, and wild easter eggs. Built for fun, chaos, and community engagement.",
      longDescription: `Welcome to Sahoor of the Damned - a twisted suburban nightmare:

• **Custom Bosses**: Face off against Roman Reigns, Mbappe, and Tung Tung Sahoor
• **Dynamic Gameplay**: Toggle Rage Inducer system changes zombie behavior
• **Wonder Weapons**: Unique weapons with Pack-a-Punch upgrades
• **Easter Eggs**: Complex puzzle system with hidden rewards
• **Community**: Active player base with positive feedback

**Technical Features:**
- Custom scripting for unique gameplay mechanics
- Advanced AI behaviors for boss encounters  
- Dynamic event system for changing gameplay
- Custom audio and visual effects
- Comprehensive testing and balancing

This map showcases creativity in game design, scripting abilities, and community engagement.`,
      techStack: [
        { name: "Game Design", icon: <FaCogs color="#fbbf24" />, color: "#fbbf24" },
        { name: "Custom Scripting", icon: <FaCode color="#fbbf24" />, color: "#fbbf24" },
      ],
      links: [
        { href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3499202705", label: "Steam Workshop", icon: <FaExternalLinkAlt /> },
      ],
      features: ["Custom Bosses", "Easter Eggs", "Dynamic Events", "Community Engagement"],
      status: "Published"
    },
    {
      id: 5,
      title: "Rage Contest Entry",
      subtitle: "NOAHJ456 Contest • Top 20 Finalist",
      category: "Game Development",
      image: "/images/projects/Noahj456.png",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #f87171, #EF4444)",
      description:
        "Top-20 finalist in the NOAHJ456 Rage contest! A challenging solo-only map with 5 chaotic trials and innovative time-bank mechanics. Created under intense time pressure.",
      longDescription: `A contest entry that achieved top-20 status out of 56 submissions:

• **Contest Achievement**: Top 20 in NOAHJ456 Rage contest
• **Time Pressure**: Built in just 2 weeks after first map was disqualified
• **Innovative Mechanics**: Time-bank system with risk/reward gameplay
• **Challenge Design**: 5 unique trials with escalating difficulty
• **Community Recognition**: Positive feedback from content creators

**Unique Features:**
- Time Bank System: Start with 140 seconds, earn/lose time based on performance
- Token Economy: Complete challenges to earn currency for upgrades
- Diverse Challenges: WWE arena, soccer field, forest navigation, train yard
- Strategic Depth: Multiple paths to victory with risk management

This project demonstrates ability to work under pressure, innovative game design, and community engagement.`,
      techStack: [
        { name: "Rapid Development", icon: <FaCogs color="#f87171" />, color: "#f87171" },
        { name: "Game Mechanics", icon: <FaCode color="#f87171" />, color: "#f87171" },
      ],
      links: [
        { href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3513305479", label: "Steam Workshop", icon: <FaExternalLinkAlt /> },
      ],
      features: ["Contest Winner", "Time Mechanics", "Strategic Gameplay", "Rapid Development"],
      status: "Contest Entry"
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-heading">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              backdropFilter: 'blur(20px)',
              border: `1px solid rgba(255,255,255,0.18)`,
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 25px 50px -12px ${project.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.3)';
            }}
          >
            {/* Project Image */}
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '0'
                }}
                onError={(e) => {
                  // Fallback to gradient background on image load error
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback gradient background */}
              <div 
                style={{
                  background: project.gradient,
                  height: '200px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              >
                <FaEye style={{ opacity: 0.3 }} />
              </div>
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  zIndex: 10
                }}
              >
                {project.category}
              </div>
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: project.status === 'Live' ? '#10B981' : 
                             project.status === 'Enterprise' ? '#6366F1' : 
                             project.status === 'Contest Entry' ? '#F59E0B' : '#8B5CF6',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  zIndex: 10
                }}
              >
                {project.status}
              </div>
            </div>

            {/* Project Content */}
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{
                  color: '#fff',
                  fontSize: '1.375rem',
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: project.color,
                  fontSize: '0.875rem',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {project.subtitle}
                </p>
              </div>

              <p style={{
                color: '#D1D5DB',
                fontSize: '0.925rem',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                marginBottom: '20px' 
              }}>
                {project.techStack.map((tech, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(255,255,255,0.1)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: tech.color,
                      fontWeight: '500'
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '6px' 
                }}>
                  {project.features.slice(0, 3).map((feature, i) => (
                    <span 
                      key={i}
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span style={{
                      color: '#9CA3AF',
                      fontSize: '0.75rem',
                      padding: '4px 6px'
                    }}>
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div style={{ 
                display: 'flex', 
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: project.gradient,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
                <button
                  className="view-details-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <FaEye />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="project-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="project-modal"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '24px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              color: 'white'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: selectedProject.gradient,
              padding: '32px',
              borderRadius: '24px 24px 0 0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '2rem', 
                    fontWeight: '700' 
                  }}>
                    {selectedProject.title}
                  </h2>
                  <p style={{ 
                    margin: '0 0 16px 0', 
                    fontSize: '1.125rem', 
                    opacity: 0.9 
                  }}>
                    {selectedProject.subtitle}
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {selectedProject.category}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              <div style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '24px',
                whiteSpace: 'pre-line'
              }}>
                {selectedProject.longDescription}
              </div>

              {/* All Features */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  margin: '0 0 12px 0', 
                  color: selectedProject.color,
                  fontSize: '1.1rem' 
                }}>
                  Key Features
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px' 
                }}>
                  {selectedProject.features.map((feature, i) => (
                    <span 
                      key={i}
                      style={{
                        background: `${selectedProject.color}20`,
                        color: selectedProject.color,
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  margin: '0 0 12px 0', 
                  color: selectedProject.color,
                  fontSize: '1.1rem' 
                }}>
                  Technology Stack
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '12px' 
                }}>
                  {selectedProject.techStack.map((tech, i) => (
                    <div 
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255,255,255,0.1)',
                        padding: '8px 16px',
                        borderRadius: '16px',
                        fontSize: '0.9rem',
                        color: tech.color,
                        fontWeight: '500'
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {selectedProject.links.length > 0 && (
                <div>
                  <h4 style={{ 
                    margin: '0 0 12px 0', 
                    color: selectedProject.color,
                    fontSize: '1.1rem' 
                  }}>
                    Links
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    {selectedProject.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: selectedProject.gradient,
                          color: 'white',
                          padding: '12px 20px',
                          borderRadius: '16px',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: '600',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          padding: 0 20px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .projects-section {
            padding: 0 10px;
          }
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .view-details-btn:hover {
          background: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.3) !important;
        }

        .project-modal {
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}