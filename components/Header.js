import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#experience", label: "Experience", idx: "01" },
  { href: "#projects", label: "Projects", idx: "02" },
  { href: "#skills", label: "Skills", idx: "03" },
  { href: "#education", label: "Education", idx: "04" },
  { href: "#contact", label: "Contact", idx: "05" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="header-nav">
        <div className="header-container">
          <a href="#top" className="header-title">FARIS ATTALLAH</a>
          <button
            className="header-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="header-resume-btn">
            RESUME.PDF
          </a>
        </div>
      </header>
      <div className={`header-mobile-menu${open ? " open" : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                <span className="idx">{link.idx}</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
