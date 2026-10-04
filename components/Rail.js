const links = [
  { href: "#experience", label: "Experience", idx: "01" },
  { href: "#projects", label: "Projects", idx: "02" },
  { href: "#skills", label: "Skills", idx: "03" },
  { href: "#education", label: "Education", idx: "04" },
  { href: "#contact", label: "Contact", idx: "05" },
];

export default function Rail() {
  return (
    <aside className="rail">
      <nav className="rail-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            <span className="idx">{link.idx}</span>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="rail-foot">
        <a href="https://github.com/FarisAttallah" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/faris-attallah-618075244/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="mailto:fattallah22@gmail.com">Email</a>
      </div>
    </aside>
  );
}
