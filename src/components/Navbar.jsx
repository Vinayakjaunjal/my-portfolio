import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home">Vinayak Jaunjal</a>
        </div>

        <ul className={`nav-menu ${active ? "active" : ""}`}>
          {[
            "home",
            "about",
            "skills",
            "experience",
            "projects",
            "education",
            "contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="nav-link"
                onClick={() => setActive(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
