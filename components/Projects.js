import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    idx: "01",
    title: "AI-Powered Fitness & Nutrition Platform",
    subtitle: "AWS · SPRING BOOT · REACT/NEXT.JS",
    status: "Personal project",
    description:
      "A full-stack platform that generates personalized workout and nutrition plans, with an AI-driven backend deployed on AWS.",
    longDescription: `Architected a full-stack platform generating personalized workout and nutrition plans:

— Built the backend with Spring Boot REST APIs, containerized via Docker, and deployed on ECS Fargate
— Integrated Amazon Bedrock for AI-driven plan generation
— Implemented authentication with AWS Cognito
— Deployed the frontend with React and Next.js using AWS Amplify for a fully responsive UI`,
    tags: ["Spring Boot", "AWS Bedrock", "ECS Fargate", "Cognito", "Next.js"],
    links: [],
  },
  {
    id: 2,
    idx: "02",
    title: "Bank-Wide Integration Testing Framework",
    subtitle: "JAVA · SPRING BOOT · M&T BANK",
    status: "Enterprise · 13+ apps",
    description:
      "A generic, write-once-use-everywhere testing framework adopted across the entire bank, now deployed in 13+ applications.",
    longDescription: `Designed a testing framework adopted across the entire bank to streamline workflow validation:

— Enabled rapid integration testing for new workflows by embedding the framework into enterprise applications
— Delivered user-friendly generic code supporting a write-once-use-everywhere approach
— Now deployed in 13+ applications bank-wide`,
    tags: ["Java", "Spring Boot", "Test Automation"],
    links: [],
  },
  {
    id: 3,
    idx: "03",
    title: "Tung Terrors",
    subtitle: "CALL OF DUTY: BLACK OPS 3 CONTEST",
    status: "Top 20 / 56",
    description:
      "A custom Zombies map built in two weeks for the NOAHJ456 Rage contest, featuring a time-bank system and risk-reward gameplay.",
    longDescription: `Delivered a fully functional custom game map in two weeks to earn Top 20 status out of 56 entries:

— Introduced innovative mechanics such as a time-bank system and risk-reward gameplay loops
— Designed five unique challenge trials with escalating difficulty
— Built a token economy for in-game upgrades`,
    tags: ["Game Design", "Custom Scripting"],
    links: [
      { href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3513305479", label: "Steam Workshop", icon: <FaExternalLinkAlt /> },
    ],
  },
  {
    id: 4,
    idx: "04",
    title: "This Portfolio",
    subtitle: "NEXT.JS · REACT",
    status: "Live",
    description:
      "The site you're on right now — rebuilt around an editorial, document-inspired layout instead of a templated card grid.",
    longDescription: `A ground-up redesign of my personal site:

— Server-rendered with Next.js for performance
— Typographic system built on Fraunces, IBM Plex Sans, and IBM Plex Mono
— Layout modeled on technical documentation rather than a SaaS landing page template
— Content sourced directly from my resume to stay accurate as my career evolves`,
    tags: ["Next.js", "React"],
    links: [
      { href: "https://github.com/FarisAttallah/faris-portfolio", label: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" data-reveal>
      <div className="section-label"><span>02 / PROJECTS</span><span className="rule" /></div>
      <h2 className="section-heading">Selected work</h2>
      <p className="section-subtext">
        A mix of production systems and side projects. Click any entry for the full writeup.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-row" onClick={() => setSelected(project)}>
            <div className="project-idx">{project.idx}</div>
            <div>
              <div className="project-head">
                <div className="project-title">{project.title}</div>
                <div className="project-status">{project.status}</div>
              </div>
              <div className="project-subtitle">{project.subtitle}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < project.tags.length - 1 && <span className="sep">/</span>}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.icon} {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="project-modal-overlay" onClick={() => setSelected(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelected(null)}>×</button>
            <div className="project-subtitle">{selected.subtitle}</div>
            <h3 className="font-display" style={{ fontSize: "1.6rem", marginTop: "0.5rem" }}>{selected.title}</h3>
            <div className="project-modal-body">{selected.longDescription}</div>
            <div className="project-tags">
              {selected.tags.map((tag, i) => (
                <span key={tag}>
                  {tag}
                  {i < selected.tags.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </div>
            {selected.links.length > 0 && (
              <div className="project-links" style={{ marginTop: "1.5rem" }}>
                {selected.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
