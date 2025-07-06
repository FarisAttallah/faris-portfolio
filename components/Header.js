import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-nav">
      <nav className="header-container">
        <div className="header-title">Faris</div>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}