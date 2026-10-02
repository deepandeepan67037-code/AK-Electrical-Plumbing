import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <div className="footer-logo-icon">
              AK
            </div>

            <div>
              <span>AK</span>
              <strong>Electrical & Plumbing</strong>
            </div>
          </a>

          <p>
            Reliable electrical and plumbing solutions for homes,
            offices and businesses. Quality workmanship with
            professional service.
          </p>

          <div className="footer-socials">

            <a
              href="https://wa.me/919789119789"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              💬
            </a>

            <a
              href="tel:+919789119789"
              aria-label="Call"
            >
              📞
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#gallery">Our Work</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#services">Electrical Wiring</a>
          <a href="#services">Electrical Repairs</a>
          <a href="#services">Lighting Installation</a>
          <a href="#services">Plumbing Repairs</a>
          <a href="#services">Water Leakage Repair</a>
          <a href="#services">Bathroom Plumbing</a>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <a href="tel:+919789119789">
            📞 +91 97891 19789
          </a>

          <a
            href="https://wa.me/919789119789"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp Us
          </a>

          <span>
            📍 Salem & Panamarathu Patty
          </span>

          <span>
            🕐 Mon - Sat
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - 6:00 PM
          </span>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div>
          © {new Date().getFullYear()} AK Electrical & Plumbing.
          All Rights Reserved.
        </div>

        <div>
          Professional Electrical & Plumbing Services
        </div>

      </div>

    </footer>
  );
}

export default Footer;