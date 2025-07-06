import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && open) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="header-nav">
      <nav className="header-container">
        <div className="header-title">Faris Attallah</div>
        {/* Hamburger for mobile (always rendered, hidden by CSS on desktop) */}
        <button
          className="header-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        {/* Desktop nav (always rendered, hidden by CSS on mobile) */}
        <ul className="header-links">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`header-mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          <li><a href="#overview" onClick={handleLinkClick}>Overview</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}