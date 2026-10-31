
import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo / Brand */}
        <Link className="navbar-brand brand-logo" to="/" onClick={closeMenu}>
          <span className="brand-icon">✦</span> MyWebsite
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
        >
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link className="nav-link" to="/about" onClick={closeMenu}>
              About Us
            </Link>

            <Link className="nav-link" to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>

            <Link
              className="nav-link register-btn"
              to="/register"
              onClick={closeMenu}
            >
              Register
            </Link>

            <Link
              className="nav-link login-btn"
              to="/login"
              onClick={closeMenu}
            >
              Login <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
