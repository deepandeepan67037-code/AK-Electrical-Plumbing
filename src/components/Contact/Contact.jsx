import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">

          <span className="section-label">
            CONTACT US
          </span>

          <h2>
            Let's Get Your <span>Work Done</span>
          </h2>

          <p>
            Need electrical or plumbing assistance? Contact AK Electrical &
            Plumbing and tell us what service you need.
          </p>

        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p className="contact-info-text">
              We're ready to help with your electrical and plumbing
              requirements.
            </p>
            {/* Name */}
            <div className="contact-item">
              <div className="contact-icon">
                🧑‍💼
              </div>

              <div>
                <span>Owner Name</span>
                <strong>M.Anandhakumar</strong>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+919789119789"
              className="contact-item"
            >
              <div className="contact-icon">
                📞
              </div>

              <div>
                <span>Call Us</span>
                <strong>+91 97891 19789</strong>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919789119789"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon whatsapp-icon">
                💬
              </div>

              <div>
                <span>WhatsApp</span>
                <strong>Chat With Us</strong>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>Service Area</span>
                <strong>Salem & Panamarathu Patty</strong>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-item">
              <div className="contact-icon">
                🕐
              </div>

              <div>
                <span>Working Hours</span>
                <strong>Monday - Saturday</strong>
                <small>10:00 AM - 6:00 PM</small>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;