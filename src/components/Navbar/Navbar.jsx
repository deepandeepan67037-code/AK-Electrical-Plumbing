import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">AK</div>

          <div className="logo-text">
            <span>Electrical & Plumbing</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Call Button */}
        <a href="tel:+919789119789" className="navbar-call">
          📞 Call Now
        </a>

      </div>
    </header>
  );
}

export default Navbar;