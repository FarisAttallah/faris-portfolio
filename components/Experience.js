const jobs = [
  {
    id: 1,
    company: "JPMorgan Chase & Co.",
    title: "Software Engineer II",
    date: "Dec 2025 — Present",
    location: "Remote",
    achievements: [
      "Engineered the Apple Card Monthly Installments integration with Chase using Java and Spring Boot to support SafePay's processing of millions of transactions monthly.",
      "Architected critical backend logic for the Funding Flow while actively contributing to API design and database persistence strategies to ensure high scalability.",
      "Implemented a resilient store-and-forward mechanism for failed transactions to minimize data loss and enhance fault tolerance.",
      "Provisioned and managed scalable cloud infrastructure utilizing AWS and Terraform to streamline deployment and system reliability.",
    ],
    technologies: ["Java", "Spring Boot", "AWS", "Terraform", "Microservices"],
  },
  {
    id: 2,
    company: "M&T Bank",
    title: "Software Engineer I",
    date: "Jul 2024 — Dec 2025",
    location: "Buffalo, NY",
    achievements: [
      "Directed a 1 TB migration from clustered file systems to Azure Blob Storage to achieve 25% cost savings.",
      "Built an automated account cleanup tool eliminating 1,000+ stale records to reduce operational overhead by 30%.",
      "Actively contributed to 10+ deployments and monitoring to cut incident response times by 15%.",
    ],
    technologies: ["Java", "Spring Boot", "Azure", "PostgreSQL"],
  },
  {
    id: 3,
    company: "FusionSpan",
    title: "Salesforce Software Developer",
    date: "Jan 2024 — Jul 2024",
    location: "Remote",
    achievements: [
      "Resolved 10+ integration issues between Fonteva and Sitecore to restore seamless CRM workflows.",
      "Enhanced pricing rules and automated record-triggered flows to lower manual corrections by 20%.",
    ],
    technologies: ["Salesforce", "Apex", "Lightning", "Fonteva"],
  },
  {
    id: 4,
    company: "M&T Bank",
    title: "Software Engineer",
    date: "Jun 2023 — Jan 2024",
    location: "Buffalo, NY",
    achievements: [
      "Developed a Spring Boot microservice handling 5,000+ daily alerts to improve incident communication.",
      "Designed an Angular-based UI for the alerting system to improve employee adoption by 40%.",
      "Built an Export Service utilized by 200+ employees weekly to streamline reporting.",
    ],
    technologies: ["Spring Boot", "Angular", "Java", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" data-reveal>
      <div className="section-label"><span>01 / EXPERIENCE</span><span className="rule" /></div>
      <h2 className="section-heading">Where I&apos;ve worked</h2>
      <p className="section-subtext">
        Four years building production systems across fintech, banking, and enterprise CRM.
      </p>
      <div className="timeline">
        {jobs.map((job) => (
          <div key={job.id} className="job-row">
            <div className="job-date">
              {job.date}
              <div className="job-location">{job.location}</div>
            </div>
            <div>
              <div className="job-company">{job.company}</div>
              <div className="job-title">{job.title}</div>
              <ul className="job-achievements">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="job-technologies">
                {job.technologies.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i < job.technologies.length - 1 && <span className="sep">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
