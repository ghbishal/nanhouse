import "./navbar.scss";
import LOGO from "../../assets/whitelogo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeNav, setActiveNav] = useState("#");
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <nav className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src={LOGO} alt="" />
          </a>
        </div>
        <input
          type="checkbox"
          checked={checked}
          className="checkbox-btn"
          id="menu-btn"
        />
        <label
          for="menu-btn"
          onClick={() => {
            setChecked((old) => !old);
          }}
          className="menu-icon"
        >
          <span className="menu-icon__line"></span>
        </label>
        <div className="navItems">
          <a
            href="#home"
            onClick={() => {
              setActiveNav("#");
              setChecked((old) => !old);
            }}
            className={activeNav === "#" ? "items active" : "items"}
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => {
              setActiveNav("#about");
              setChecked((old) => !old);
            }}
            className={activeNav === "#about" ? "items active" : "items"}
          >
            ABOUTUS
          </a>

          <a
            href="#menu"
            onClick={() => {
              setActiveNav("#menu");
              setChecked((old) => !old);
            }}
            className={activeNav === "#menu" ? "items active" : "items"}
          >
            OURMENU
          </a>

          <a
            href="#team"
            onClick={() => {
              setActiveNav("#team");
              setChecked((old) => !old);
            }}
            className={activeNav === "#team" ? "items active" : "items"}
          >
            OUR TEAM
          </a>
          <a
            href="#testimonial"
            onClick={() => {
              setActiveNav("#testimonial");
              setChecked((old) => !old);
            }}
            className={activeNav === "#testimonial" ? "items active" : "items"}
          >
            TESTIMONIAL
          </a>
          <a
            href="#contactus"
            onClick={() => {
              setActiveNav("#contactus");
              setChecked((old) => !old);
            }}
            className={activeNav === "#contactus" ? "items active" : "items"}
          >
            CONTACTUS
          </a>
          <div className="login">
            <a
              href="#"
              onClick={() => {
                setChecked((old) => !old);
              }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
