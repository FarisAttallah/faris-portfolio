import { useEffect, useState } from "react";
import Image from "next/image";
import { FaJava, FaPython, FaNodeJs, FaLinux, FaGitAlt, FaUser, FaGraduationCap, FaBriefcase, FaCode, FaMapMarkerAlt, FaCalendarAlt, FaAward, FaCloud } from "react-icons/fa";
import { SiCplusplus, SiC, SiRuby, SiJavascript, SiAngular, SiPostgresql, SiReact, SiNextdotjs, SiSpringboot, SiDocker, SiAmazonwebservices } from "react-icons/si";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const jobs = [
    {
      id: 1,
      company: "M&T Bank",
      title: "Software Engineer 1",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      image: "/images/projects/M&T bank.png",
      date: "Jul 2024 – Present",
      duration: "1+ years",
      location: "Buffalo, NY",
      type: "Full-time",
      achievements: [
        "Led bank-wide file storage migration from clustered file systems to Azure Blob Storage",
        "Developed admin tool for identifying and cleaning stale account opening instances",
        "Managed production deployments and critical system monitoring",
        "Contributed to enterprise microservices focusing on backend scalability and reliability",
        "Improved system performance by 40% through optimization initiatives"
      ],
      technologies: ["Java", "Spring Boot", "Azure", "Microservices", "PostgreSQL"],
      highlights: ["Migration Leadership", "Performance Optimization", "Enterprise Scale"]
    },
    {
      id: 2,
      company: "FusionSpan",
      title: "Salesforce Software Developer",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      image: "/images/projects/fusion-span.jpg",
      date: "Jan 2024 – Jul 2024",
      duration: "6 months",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Resolved complex Salesforce integration issues between Fonteva and Sitecore",
        "Enhanced pricing rule functionality and record-triggered flows",
        "Collaborated with cross-functional teams ensuring accurate data flow",
        "Improved CRM update efficiency by 25%"
      ],
      technologies: ["Salesforce", "Apex", "Lightning", "Fonteva", "Sitecore"],
      highlights: ["Integration Expertise", "Cross-functional Collaboration", "CRM Optimization"]
    },
    {
      id: 3,
      company: "M&T Bank",
      title: "Technology Intern",
      color: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
      image: "/images/projects/M&T bank.png",
      date: "Jun 2023 – Jan 2024",
      duration: "8 months",
      location: "Buffalo, NY",
      type: "Internship",
      achievements: [
        "Developed notification microservice from scratch using Spring Boot",
        "Implemented microservice UI with Angular for seamless user experience",
        "Built Export Service for PDF and CSV export functionality",
        "Delivered full-stack solution with 99% uptime"
      ],
      technologies: ["Spring Boot", "Angular", "Java", "REST APIs", "PostgreSQL"],
      highlights: ["Full-stack Development", "Microservices Architecture", "High Availability"]
    },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      color: "#f97316",
      skills: [
        { icon: <FaJava color="#e76f00" />, label: "Java", level: 95 },
        { icon: <SiJavascript color="#f7df1e" />, label: "JavaScript", level: 95 },
        { icon: <FaPython color="#3776ab" />, label: "Python", level: 85 },
        { icon: <SiC color="#5e97d0" />, label: "C", level: 75 },
        { icon: <SiCplusplus color="#00599c" />, label: "C++", level: 70 },
        { icon: <SiRuby color="#cc342d" />, label: "Ruby", level: 65 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      color: "#06b6d4",
      skills: [
        { icon: <SiSpringboot color="#6db33f" />, label: "Spring Boot", level: 95 },
        { icon: <FaNodeJs color="#3c873a" />, label: "Node.js", level: 95 },
        { icon: <SiReact color="#61dafb" />, label: "React", level: 90 },
        { icon: <SiNextdotjs color="#fff" />, label: "Next.js", level: 85 },
        { icon: <SiAngular color="#dd0031" />, label: "Angular", level: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      color: "#8b5cf6",
      skills: [
        { icon: <SiAmazonwebservices color="#ff9900" />, label: "AWS", level: 80 },
        { icon: <FaCloud color="#0078d4" />, label: "Azure", level: 85 },
        { icon: <SiDocker color="#2496ed" />, label: "Docker", level: 75 },
        { icon: <FaGitAlt color="#f34f29" />, label: "Git", level: 95 },
        { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL", level: 85 },
        { icon: <FaLinux color="#fff" />, label: "Linux", level: 80 },
      ]
    }
  ];

  const personalInfo = {
    name: "Faris Attallah",
    title: "Full Stack Software Engineer",
    location: "Buffalo, NY",
    email: "faris.attallah@example.com",
    bio: `I'm a passionate software engineer with a love for building robust, scalable applications. 
          My journey in tech started with curiosity about how things work under the hood, and has evolved 
          into a career focused on creating meaningful solutions that impact real users. When I'm not coding, 
          you'll find me exploring new technologies, playing games, or working on creative projects.`
  };

  const education = [
    {
      institution: "University of Maryland, College Park",
      degree: "Bachelor of Science in Computer Science",
      date: "Dec 2023",
      gpa: "3.9/4.0",
      relevant: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "Operating Systems", "Machine Learning"],
      color: "#10b981"
    },
    {
      institution: "Howard Community College, Columbia",
      degree: "Associate of Science in Computer Science",
      date: "Jun 2021",
      gpa: "4.0/4.0",
      relevant: ["Programming Fundamentals", "Calculus", "Physics", "Computer Science Principles"],
      color: "#3b82f6"
    }
  ];

  return (
    <section className="about-section">
      {/* Personal Introduction */}
      <div className="intro-section" data-aos="fade-up">
        <div className="intro-content">
          <div className="intro-text">
            <div className="intro-header">
              <h1 className="intro-name">{personalInfo.name}</h1>
              <p className="intro-title">{personalInfo.title}</p>
              <div className="intro-location">
                <FaMapMarkerAlt />
                {personalInfo.location}
              </div>
            </div>
            <p className="intro-bio">{personalInfo.bio}</p>
          </div>
          <div className="intro-avatar">
            <div className="avatar-placeholder">
              <FaUser />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="about-tabs" data-aos="fade-up" data-aos-delay="100">
        {[
          { id: 'experience', label: 'Work Experience', icon: <FaBriefcase /> },
          { id: 'skills', label: 'Technical Skills', icon: <FaCode /> },
          { id: 'education', label: 'Education', icon: <FaGraduationCap /> }
        ].map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Experience Section */}
      {activeTab === 'experience' && (
        <div className="experience-section" data-aos="fade-up" data-aos-delay="200">
          <div className="timeline">
            {jobs.map((job, idx) => (
              <div key={job.id} className="timeline-item" data-aos="fade-left" data-aos-delay={idx * 100}>
                <div className="timeline-dot" style={{ background: job.color }}></div>
                <div className="timeline-content">
                  <div className="job-card" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}>
                    <div className="job-header">
                      <div className="job-header-top">
                        <div className="job-left-section">
                          <div className="company-logo-container">
                            <Image
                              src={job.image}
                              alt={`${job.company} logo`}
                              width={200}
                              height={60}
                              style={{
                                objectFit: 'contain',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.95)',
                                padding: '8px'
                              }}
                            />
                          </div>
                          <p className="job-title">{job.title}</p>
                        </div>
                        <div className="job-right-section">
                          <div className="job-duration" style={{ color: job.color }}>
                            {job.duration}
                          </div>
                          <div className="job-meta">
                            <span className="job-date">
                              <FaCalendarAlt />
                              {job.date}
                            </span>
                            <span className="job-location">
                              <FaMapMarkerAlt />
                              {job.location}
                            </span>
                            <span className="job-type" style={{ background: job.color }}>
                              {job.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="job-highlights">
                      {job.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-badge" style={{ background: `${job.color}20`, color: job.color }}>
                          <FaAward />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <ul className="job-achievements">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>

                    <div className="job-technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {job.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag" style={{ background: `${job.color}15`, borderColor: `${job.color}40` }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeTab === 'skills' && (
        <div className="skills-section" data-aos="fade-up" data-aos-delay="200">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="skill-category" data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div key={skill.label} className="skill-item">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <div className="skill-level" style={{ background: `conic-gradient(${category.color} ${skill.level * 3.6}deg, rgba(255,255,255,0.1) 0deg)` }}>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    <span className="skill-label">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="education-section" data-aos="fade-up" data-aos-delay="200">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-header">
                <FaGraduationCap className="education-icon" style={{ color: edu.color }} />
                <div className="education-info">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="education-date">{edu.date}</span>
                    <span className="education-gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
              <div className="relevant-courses">
                <h4>Relevant Coursework:</h4>
                <div className="course-tags">
                  {edu.relevant.map((course, i) => (
                    <span key={i} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .about-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .intro-section {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 24px;
          padding: 40px;
          margin-bottom: 40px;
        }

        .intro-content {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .intro-text {
          flex: 1;
          min-width: 300px;
        }

        .intro-header {
          margin-bottom: 24px;
        }

        .intro-name {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #915EFF, #7dd3fc);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 8px 0;
        }

        .intro-title {
          font-size: 1.5rem;
          color: #7dd3fc;
          margin: 0 0 12px 0;
          font-weight: 600;
        }

        .intro-location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #9CA3AF;
          font-size: 1rem;
        }

        .intro-bio {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #D1D5DB;
        }

        .intro-avatar {
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #915EFF, #7dd3fc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
        }

        .about-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          color: #D1D5DB;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .tab-button:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #915EFF, #7dd3fc);
          color: white;
          border-color: transparent;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #915EFF, #7dd3fc, #fbbf24);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-dot {
          position: absolute;
          left: -23px;
          top: 20px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid #1a1b2e;
        }

        .timeline-content {
          margin-left: 20px;
        }

        .job-card {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .job-company {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 4px 0;
        }

        .job-title {
          font-size: 1.1rem;
          color: #7dd3fc;
          margin: 0 0 12px 0;
          font-weight: 600;
        }

        .job-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .job-date, .job-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #9CA3AF;
          font-size: 0.9rem;
        }

        .job-type {
          padding: 4px 12px;
          border-radius: 12px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .job-duration {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .job-highlights {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .highlight-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .job-achievements {
          list-style: none;
          padding: 0;
          margin-bottom: 24px;
        }

        .job-achievements li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: #D1D5DB;
          line-height: 1.6;
        }

        .job-achievements li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #7dd3fc;
          font-weight: bold;
        }

        .job-technologies h4 {
          color: #D1D5DB;
          margin: 0 0 12px 0;
          font-size: 1rem;
        }

        .tech-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tech-tag {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid;
        }

        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .skill-category {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 32px;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 24px 0;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 24px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .skill-icon-container {
          position: relative;
          margin-bottom: 12px;
        }

        .skill-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          border-radius: 16px;
          font-size: 2rem;
          position: relative;
          z-index: 2;
        }

        .skill-level {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .skill-percentage {
          position: absolute;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          bottom: -20px;
        }

        .skill-label {
          color: #D1D5DB;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .education-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .education-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 32px;
        }

        .education-header {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .education-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .education-degree {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin: 0 0 8px 0;
        }

        .education-institution {
          font-size: 1.1rem;
          color: #7dd3fc;
          margin: 0 0 12px 0;
        }

        .education-meta {
          display: flex;
          gap: 16px;
          color: #9CA3AF;
        }

        .relevant-courses h4 {
          color: #D1D5DB;
          margin: 0 0 12px 0;
        }

        .course-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .course-tag {
          padding: 6px 12px;
          background: rgba(145, 94, 255, 0.2);
          color: #915EFF;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .intro-content {
            flex-direction: column;
            text-align: center;
          }

          .intro-name {
            font-size: 2.5rem;
          }

          .avatar-placeholder {
            width: 150px;
            height: 150px;
            font-size: 3rem;
          }

          .about-tabs {
            flex-direction: column;
          }

          .tab-button {
            justify-content: center;
          }

          .timeline {
            padding-left: 20px;
          }

          .timeline-dot {
            left: -18px;
          }

          .job-header {
            flex-direction: column;
            gap: 16px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 16px;
          }

          .education-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}