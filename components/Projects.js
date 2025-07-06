import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaCogs } from "react-icons/fa";
import { SiNextdotjs, SiJest } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { TiVendorMicrosoft } from "react-icons/ti";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      title: "Personal Portfolio",
      color: "#915EFF",
      description:
        "This portfolio site, designed and built from scratch with Next.js, React, Three.js, and creative UI/UX. Features a 3D gaming setup, animated backgrounds, and a fully responsive design.",
      icons: [
        <FaReact color="#61dafb" title="React" key="react" />,
        <SiNextdotjs color="#fff" title="Next.js" key="nextjs" />,
        <FaCogs color="#b6aaff" title="3D/Creative" key="cogs" />,
      ],
      links: [
        {
          href: "https://github.com/yourusername/your-portfolio",
          label: "GitHub",
          icon: <FaGithub />,
        },
      ],
    },
    {
      title: "Integration Testing Framework (M&T Bank)",
      color: "#7dd3fc",
      description:
        "Developed a robust integration testing framework for enterprise microservices at M&T Bank. Automated end-to-end test scenarios, improved reliability, and enabled faster CI/CD pipelines.",
      icons: [
        <SiJest color="#e34c26" title="Jest" key="jest" />,
        <FaCogs color="#7dd3fc" title="Automation" key="cogs" />,
        <VscAzureDevops color="#0078d4" title="Azure Pipelines" key="azurepipelines" />,
      ],
      links: [],
    },
    {
      title: "Blob Storage Migration & Setup (M&T Bank)",
      color: "#2563eb",
      description:
        "Led the migration from legacy clustered file systems to modern Azure Blob Storage. Designed, implemented, and documented the new architecture, improving scalability and maintainability.",
      icons: [
        <TiVendorMicrosoft color="#2563eb" title="Microsoft" key="microsoft" />,
        <FaCogs color="#2563eb" title="Migration" key="cogs" />,
      ],
      links: [],
    },
    {
      title: "Sahoor of the Damned (BO3 Custom Map)",
      color: "#fbbf24",
      description: `Welcome to Sahoor of the Damned, a chaotic, boss-heavy custom Zombies map set in a twisted suburb haunted by over-the-top enemies and cursed rituals. Battle through waves of the undead, face custom bosses like Roman Reigns and Mbappe, gamble for rewards, and discover wild easter eggs. Built for fun, chaos, and laughs!`,
      icons: [
        <FaCogs color="#fbbf24" title="Custom Map" key="map" />,
      ],
      links: [
        {
          href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3499202705",
          label: "Steam Workshop",
          icon: <FaExternalLinkAlt />,
        },
      ],
      details: `
**Features:**
- Dynamic Toggle Rage Inducer (NoahJ456 Special): Every few rounds, the zombies stop shambling and start hauling ass.
- Custom Bosses: Face off against the likes of Roman Reigns, Mbappe, and Tung Tung Sahoor himself.
- Gambling Machine: Risk your points for powerful rewards... or absolute garbage.
- Wonder Weapon: Wield the mighty Tung Tung Tung Sahoor, and Pack-a-Punch it into something even more absurd.
- Shootable Easter Egg: Hit all hidden targets to unlock all perks and a secret showdown.
- Explosive Finale: Complete the boss fight and survive the ultimate test—the Bat of Destiny.

**Developer Notes:**  
This map is meant to be fun, chaotic, and not taken too seriously. There's a story in here somewhere maybe. Built with love, caffeine, and way too many script threads. Expect glitches. Expect laughs.

**Easter Egg Steps:**  
- Unlock power by speaking to the landlord and interacting with the homeless man (multiple locations).
- Defeat Tung Tung Tung Sahoor to get the bat, fill soul boxes, and complete challenges.
- Find and shoot Moaz's paintings for Perkaholic.
- Complete gym and ultimate team challenges for the main Easter Egg.
      `,
    },
    {
      title: "Rage Contest Map (BO3 Custom Map)",
      color: "#f87171",
      description: `A top-20 finalist in the NOAHJ456 Rage contest! This solo-only BO3 custom map challenges you to complete 5 chaotic trials before your timer runs out. Created in just two weeks after my previous map was DQ'd, this entry is all about speed, strategy, and skill. Not for the faint of heart!`,
      icons: [
        <FaCogs color="#f87171" title="Rage Map" key="rage" />,
      ],
      links: [
        {
          href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3513305479",
          label: "Steam Workshop",
          icon: <FaExternalLinkAlt />,
        },
      ],
      details: `
**Contest:**  
- Submission to NOAHJ456 Rage contest (top 20 out of 56 entries as of now)
- Solo only (coop may come later if there's demand)

**Background:**  
After my first map "Sahoor of the Damned" was DQ'd, I came back with this even more intense challenge. My goal: difficult but fair, and always fun.

**Gameplay:**  
You spawn with a ticking timer and one goal: complete 5 chaotic trials before your time runs out. Each trial drains your timer, and only completing objectives will earn it back.

**Features:**
- Time Bank System: Start with 140 seconds. Completing objectives rewards time. Failing drains it.
- Token System: Completing challenges rewards tokens for use at the hub.
- 5 Unique Challenges:
  • Intro – An intro challenge  
  • Roman Reigns WWE Arena – Defend against his spear, then finish him  
  • Mbappé's Soccer Field – Score 3 goals… then break his legs  
  • Forest of Sahoor – Navigate with corrupted Tung Tung Sahoor  
  • Trainyard Showdown – Avoid trains and a demon bus driver
- Item Shop: Trade tokens for weapons, perks, and power-ups

**Dev Notes:**  
This is my second ever map. It's meant to be hard, but beatable once you learn the tricks. If you finish it, let me know!  
Pack-a-Punch only works from behind—consider it a feature :)

`,
    },
  ];

  return (
    <section>
      <h2 className="section-heading">Projects</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "1.2rem" : "2.5rem",
          justifyContent: "center",
          alignItems: "stretch",
          width: isMobile ? "94vw" : "100%",
          maxWidth: isMobile ? "94vw" : "100%",
          margin: isMobile ? "0 auto" : undefined,
          paddingLeft: isMobile ? "3vw" : 0,
          paddingRight: isMobile ? "3vw" : 0,
          boxSizing: "border-box",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.title}
            data-aos="zoom-in-up"
            data-aos-delay={100 * idx}
            style={{
              background: "rgba(36,40,60,0.55)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: `1.5px solid ${project.color}55`,
              borderRadius: "1.25rem",
              boxShadow: `0 8px 36px 0 ${project.color}22`,
              padding: isMobile ? "1.5rem 0.8rem 1.2rem 0.8rem" : "2.7rem 2.2rem 2.2rem 2.2rem",
              minWidth: isMobile ? 220 : 340,
              maxWidth: isMobile ? 340 : 500,
              flex: isMobile ? "1 1 220px" : "1 1 420px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              borderLeft: `6px solid ${project.color}`,
              transition:
                "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s cubic-bezier(.22,1,.36,1), background 0.3s",
              cursor: "pointer",
              animation:
                "projectCardPop 0.8s cubic-bezier(.22,1,.36,1) both",
              animationDelay: `${0.1 * idx + 0.2}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.035)";
              e.currentTarget.style.boxShadow = `0 20px 56px 0 ${project.color}55`;
              e.currentTarget.style.background = "rgba(36,40,60,0.68)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = `0 8px 36px 0 ${project.color}22`;
              e.currentTarget.style.background = "rgba(36,40,60,0.55)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              {project.icons && project.icons.map((icon, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: isMobile ? 22 : 28,
                    background: "rgba(36,40,60,0.13)",
                    borderRadius: "0.6rem",
                    padding: isMobile ? 4 : 6,
                    boxShadow: "0 2px 8px #23243a33",
                    animation: "iconFloat 2.2s ease-in-out infinite",
                    animationDelay: `${i * 0.2 + 0.1 * idx}s`,
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
            <h3
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? 16 : 20,
                margin: 0,
                letterSpacing: 0.5,
                marginBottom: 10,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: "#e0e7ef",
                fontSize: isMobile ? 13.5 : 15.5,
                marginBottom: 18,
                opacity: 0.96,
                minHeight: isMobile ? 40 : 70,
              }}
            >
              {project.description}
            </p>
            {/* Show details for custom map if present */}
            {project.details && (
              <div
                style={{
                  background: "rgba(36,40,60,0.13)",
                  borderRadius: "0.75rem",
                  padding: isMobile ? "0.7rem" : "1rem",
                  color: "#f3f4f6",
                  fontSize: isMobile ? 12 : 14,
                  marginBottom: 10,
                  whiteSpace: "pre-line",
                  opacity: 0.93,
                  maxHeight: isMobile ? 120 : 220,
                  overflowY: "auto",
                }}
                dangerouslySetInnerHTML={{ __html: project.details.replace(/\n/g, "<br/>") }}
              />
            )}
            <div style={{ marginTop: "auto", display: "flex", gap: 18 }}>
              {(project.links || []).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    background: "#23243a",
                    borderRadius: 8,
                    padding: isMobile ? "5px 10px" : "6px 14px",
                    fontWeight: 500,
                    fontSize: isMobile ? 13 : 15,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {link.icon}
                  {link.label}
                  <FaExternalLinkAlt
                    style={{ fontSize: 12, marginLeft: 4, opacity: 0.7 }}
                  />
                </a>
              ))}
            </div>
            {/* Decorative blurred background blob */}
            <div
              style={{
                position: "absolute",
                right: -60,
                bottom: -60,
                width: isMobile ? 80 : 140,
                height: isMobile ? 80 : 140,
                background: project.color,
                opacity: 0.13,
                filter: "blur(32px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes projectCardPop {
          0% { opacity: 0; transform: scale(0.92) translateY(40px);}
          80% { opacity: 1; transform: scale(1.04) translateY(-6px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
      `}</style>
    </section>
  );
}