import { useEffect, useState } from "react";
import { FaJava, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiC, SiRuby, SiJavascript, SiAngular, SiPostgresql, SiHaskell, SiOcaml } from "react-icons/si";

export default function WorkExperience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const jobs = [
    {
      company: "M&T Bank",
      title: "Software Engineer 1",
      color: "#7dd3fc", // soft blue
      date: "Jul 2024 – Current",
      bullets: [
        "Led a bank-wide file storage migration from clustered file systems to blob storage.",
        "Kickstarted the development of an admin tool to identify and clean up stale account opening instances.",
        "Actively involved in production deployments and critical system monitoring.",
        "Contributed to enterprise microservices, focusing on backend scalability and reliability.",
      ],
    },
    {
      company: "FusionSpan",
      title: "Salesforce Software Developer",
      color: "#a5b4fc", // soft indigo
      date: "Jan 2024 – Jul 2023",
      bullets: [
        "Resolved complex Salesforce integration issues between Fonteva and Sitecore.",
        "Enhanced pricing rule functionality and record-triggered flows within Salesforce.",
        "Collaborated with cross-functional teams to ensure accurate data flow and timely CRM updates.",
      ],
    },
    {
      company: "M&T Bank",
      title: "Technology Intern",
      color: "#2563eb", // deep blue
      date: "Jun 2023 – Jan 2024",
      bullets: [
        "Developed and set up a notification microservice from scratch using Spring Boot.",
        "Implemented the microservice's UI with Angular for a seamless user experience.",
        "Built an Export Service for users to export tickets and tasks to PDF and CSV.",
      ],
    },
  ];

  const bgGradients = [
    "linear-gradient(120deg, #23243a 60%, #7dd3fc 100%)",
    "linear-gradient(120deg, #23243a 60%, #a5b4fc 100%)",
    "linear-gradient(120deg, #23243a 60%, #2563eb 100%)",
  ];

  const skills = [
    { icon: <FaJava color="#e76f00" />, label: "Java" },
    { icon: <FaPython color="#3776ab" />, label: "Python" },
    { icon: <SiC color="#5e97d0" />, label: "C" },
    { icon: <SiCplusplus color="#00599c" />, label: "C++" },
    { icon: <SiRuby color="#cc342d" />, label: "Ruby" },
    { icon: <SiJavascript color="#f7df1e" />, label: "JavaScript" },
    { icon: <FaNodeJs color="#3c873a" />, label: "Node.js" },
    { icon: <FaHtml5 color="#e34c26" />, label: "HTML5" },
    { icon: <FaCss3Alt color="#1572b6" />, label: "CSS3" },
    { icon: <SiAngular color="#dd0031" />, label: "Angular" },
    { icon: <SiPostgresql color="#336791" />, label: "SQL" },
    { icon: <FaLinux color="#fff" />, label: "Linux" },
    { icon: <SiHaskell color="#5e5086" />, label: "Haskell" },
    { icon: <SiOcaml color="#ec6813" />, label: "OCaml" },
    { icon: <FaGitAlt color="#f34f29" />, label: "Git" },
  ];

  return (
    <section id="work-experience">
      <h2
        style={{
          fontSize: isMobile ? 24 : 32,
          fontWeight: 700,
          letterSpacing: 1,
          color: "#e0e7ef",
          textAlign: "center",
          marginBottom: isMobile ? "1.5rem" : "2.5rem",
        }}
      >
        Work Experience
      </h2>
      <div
        style={{
          width: isMobile ? "94vw" : 900,
          maxWidth: isMobile ? "94vw" : 900,
          margin: isMobile ? "0 auto" : "0 auto",
          paddingLeft: isMobile ? "3vw" : 0,   // Add margin to left
          paddingRight: isMobile ? "3vw" : 0,  // Add margin to right
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "1.2rem" : "2.5rem",
          padding: 0,
        }}
      >
        {jobs.map((job, idx) => (
          <div
            key={job.company + job.title}
            data-aos="fade-up"
            data-aos-delay={100 * idx}
            data-aos-offset="60"
            style={{
              background: bgGradients[idx % bgGradients.length],
              borderRadius: "1.25rem",
              boxShadow: "0 8px 36px 0 rgba(36,40,60,0.16)",
              padding: isMobile ? "1.2rem 0.8rem 1.1rem 0.8rem" : "2.2rem 2.2rem 2rem 2.2rem",
              display: "flex",
              alignItems: "flex-start",
              gap: isMobile ? "0.7rem" : "1.5rem",
              position: "relative",
              overflow: "hidden",
              minHeight: isMobile ? 120 : 170,
              borderLeft: `6px solid ${job.color}`,
              transition: "transform 0.3s, box-shadow 0.3s",
              backdropFilter: "blur(2px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.018)";
              e.currentTarget.style.boxShadow = `0 16px 48px 0 ${job.color}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 8px 36px 0 rgba(36,40,60,0.16)";
            }}
          >
            {/* Decorative dot */}
            <div
              style={{
                width: isMobile ? 18 : 24,
                height: isMobile ? 18 : 24,
                borderRadius: "50%",
                background: job.color,
                marginRight: 10,
                marginTop: 4,
                boxShadow: `0 2px 16px ${job.color}55`,
                flexShrink: 0,
                border: "2.5px solid #23243a",
                zIndex: 2,
                animation: "pulseDot 2.5s infinite",
              }}
            />
            <div style={{ flex: 1, zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 2,
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: isMobile ? 16 : 20,
                    margin: 0,
                    letterSpacing: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {job.company}
                </h3>
                <span
                  style={{
                    color: "#e0e7ef",
                    fontWeight: 400,
                    fontSize: isMobile ? 13 : 15,
                    opacity: 0.85,
                    marginLeft: 2,
                  }}
                >
                  {" "}
                  — {job.title}
                </span>
                <span
                  style={{
                    color: "#23243a",
                    fontSize: isMobile ? 12 : 14,
                    fontWeight: 600,
                    marginLeft: "auto",
                    background: "#fff8",
                    borderRadius: 8,
                    padding: isMobile ? "2px 8px" : "2px 12px",
                    letterSpacing: 0.5,
                  }}
                >
                  {job.date}
                </span>
              </div>
              <ul
                style={{
                  color: "#f3f4f6",
                  fontSize: isMobile ? 13.5 : 15.5,
                  margin: "16px 0 0 0",
                  paddingLeft: isMobile ? 16 : 22,
                  listStyle: "disc",
                  lineHeight: 1.7,
                  opacity: 0.96,
                }}
              >
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            {/* Decorative blurred background blob */}
            <div
              style={{
                position: "absolute",
                right: -60,
                bottom: -60,
                width: isMobile ? 100 : 170,
                height: isMobile ? 100 : 170,
                background: job.color,
                opacity: 0.11,
                filter: "blur(36px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* Subtle top-right accent */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: isMobile ? 50 : 80,
                height: isMobile ? 50 : 80,
                background: job.color,
                opacity: 0.10,
                filter: "blur(18px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: isMobile ? "2rem" : "3.5rem" }}>
        <h3
          style={{
            fontSize: isMobile ? 18 : 24,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#e0e7ef",
            textAlign: "center",
            marginBottom: isMobile ? "1.2rem" : "2rem",
          }}
        >
          Tech Skills
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isMobile ? "1.2rem" : "2.2rem",
          }}
        >
          {skills.map((skill) => (
            <SkillIcon key={skill.label} icon={skill.icon} label={skill.label} isMobile={isMobile} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulseDot {
          0%,
          100% {
            box-shadow: 0 2px 16px #7dd3fc55, 0 0 0 0 #7dd3fc33;
          }
          50% {
            box-shadow: 0 2px 24px #7dd3fc99, 0 0 0 12px #7dd3fc22;
          }
        }
      `}</style>
    </section>
  );
}

// Helper component for skill icons
function SkillIcon({ icon, label, isMobile }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        minWidth: isMobile ? 50 : 70,
      }}
    >
      <div
        style={{
          width: isMobile ? 34 : 44,
          height: isMobile ? 34 : 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(36,40,60,0.12)",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 8px #23243a55",
          fontSize: isMobile ? 24 : 34,
        }}
      >
        {icon}
      </div>
      <span
        style={{
          color: "#d1d5db",
          fontSize: isMobile ? 11 : 14,
          fontWeight: 500,
          marginTop: 2,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}