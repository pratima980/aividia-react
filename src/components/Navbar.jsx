import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      {/* =========================
          NORMAL NAVBAR
      ========================= */}

      <nav className={`navbar navbar-expand-lg aividia-nav ${sticky ? "d-none" : ""}`}>

        <div className="container nav-container">

          {/* Logo */}
          <a className="navbar-brand order-1" href="/">
            <img src="/template-images/Aividia-Logo.png" alt="" />
          </a>

          {/* Right Side */}
          <div className="nav-right d-flex align-items-center order-2 order-lg-3 order-md-3">

            <a href="#" className="login-link order-1 order-lg-1 order-md-1">
              LOGIN
            </a>

            <a  href="/contact" className="btn contact-btn order-2 order-lg-2 order-md-2">
              CONTACT AIVIDIA
            </a>

          </div>

          {/* Toggle */}
          <button
            className="navbar-toggler order-3 order-lg-3 order-md-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Menu */}
          <div
            className="collapse navbar-collapse justify-content-center order-4 order-lg-4 order-md-4"
            id="mainNavbar"
          >

            <ul className="navbar-nav nav-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About AIVIDIA</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/clients" className="nav-link">Client Success</NavLink>
              </li>

            </ul>

          </div>

        </div>
      </nav>

      {/* =========================
          STICKY NAVBAR
      ========================= */}

      <nav className={`navbar navbar-expand-lg aividia-nav sticky-nav ${sticky ? "show" : ""}`}>

        <div className="container-fluid nav-container">

          {/* Logo */}
          <a className="navbar-brand order-1" href="#">
            <img src="/template-images/Aividia-Logo-sticky.png" alt="" />
          </a>

          {/* Right Side */}
          <div className="nav-right d-flex align-items-center order-2 order-lg-3 order-md-3">

            <a href="#" className="login-link order-1 order-lg-1 order-md-1">
              LOGIN
            </a>

            <a href="/contact" className="btn contact-btn order-2 order-lg-2 order-md-2">
              CONTACT AIVIDIA
            </a>

          </div>

          {/* Toggle */}
          <button
            className="navbar-toggler order-3 order-lg-3 order-md-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#stickyNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Menu */}
          <div
            className="collapse navbar-collapse justify-content-center order-4 order-lg-4 order-md-4"
            id="stickyNavbar"
          >

            <ul className="navbar-nav nav-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About AIVIDIA</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/clients" className="nav-link">Client Success</NavLink>
              </li>

            </ul>

          </div>

        </div>
      </nav>

    </>
  );
}

export default Navbar;