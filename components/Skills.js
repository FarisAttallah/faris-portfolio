const skillGroups = [
  { label: "LANGUAGES", skills: ["Java", "Python", "C", "C++", "Ruby", "JavaScript", "Node.js", "SQL"] },
  { label: "FRAMEWORKS", skills: ["Spring Boot", "React", "Next.js", "Angular"] },
  { label: "CLOUD & TOOLS", skills: ["AWS S3", "ECS Fargate", "Cognito", "RDS", "Bedrock", "SES", "CloudFront", "Docker", "Terraform", "GitHub Actions", "Jenkins"] },
  { label: "DATABASES", skills: ["Oracle", "PostgreSQL", "MySQL"] },
  { label: "SYSTEMS", skills: ["UNIX/Linux", "Windows"] },
];

const competencies = [
  { title: "BACKEND", desc: "Java, Spring Boot, Python, Node.js, Ruby" },
  { title: "CLOUD & INFRA", desc: "AWS, Terraform, Docker — provisioning and scaling production systems" },
  { title: "FULL-STACK", desc: "React, Next.js, Angular, JavaScript" },
  { title: "CI/CD & DEVOPS", desc: "GitHub Actions, Jenkins, Vercel, Amplify" },
];

function TagRow({ skills }) {
  return (
    <span>
      {skills.map((skill, i) => (
        <span key={skill}>
          {skill}
          {i < skills.length - 1 && <span className="sep">/</span>}
        </span>
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" data-reveal>
      <div className="section-label"><span>03 / SKILLS</span><span className="rule" /></div>
      <h2 className="section-heading">Technical toolkit</h2>
      <p className="section-subtext">
        Grouped by category — the technologies I actually ship with, not a percentage guess.
      </p>

      <div className="skill-table">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-row">
            <div className="skill-row-label">{group.label}</div>
            <div className="skill-row-value"><TagRow skills={group.skills} /></div>
          </div>
        ))}
      </div>

      <div className="competencies-list">
        {competencies.map((c) => (
          <div key={c.title} className="competency-row">
            <div className="competency-title">{c.title}</div>
            <div className="competency-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
