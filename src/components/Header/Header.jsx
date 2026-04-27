import { useState } from "react";
import logo from "/src/assets/images/janvi-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Works", link: "#portfolio" },
    { name: "Education", link: "#education" },
    { name: "Testimonials", link: "#Testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="position-sticky top-0 bg-white z-1">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a href="#home">
            <img src={logo} width="70" />
          </a>

          <button
            className="navbar-toggler"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`navbar-nav fw-bold ${menuOpen ? "d-block" : "d-none d-lg-flex"}`}>
            {navItems.map((item, i) => (
              <li key={i}>
                <a className="nav-link" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </header>
  );
}

export default Header;