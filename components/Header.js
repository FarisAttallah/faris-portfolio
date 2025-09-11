import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

  const isActive = (path) => router.pathname === path;

  return (
    <header className="header-nav">
      <nav className="header-container">
        <Link href="/" className="header-title">Faris Attallah</Link>
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
          <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`header-mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          <li><Link href="/" onClick={handleLinkClick} className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" onClick={handleLinkClick} className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link href="/projects" onClick={handleLinkClick} className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick} className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}