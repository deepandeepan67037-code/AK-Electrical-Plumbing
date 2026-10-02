import "./Hero.css";
import heroImage from "../../assets/home.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            ⚡ Professional Electrical & Plumbing Services
          </div>

          <h1>
            Electrical & Plumbing for
            <span> Your Home & Business</span>
          </h1>

          <p>
            From electrical repairs and installations to complete plumbing
            solutions, AK Electrical & Plumbing provides reliable,
            professional and quality service you can trust.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="hero-primary-btn">
              Get In Touch →
            </a>

            <a href="tel:+919789119789" className="hero-secondary-btn">
              📞 Call Now
            </a>

          </div>

          <div className="hero-features">

            <div className="hero-feature">
              <span>✓</span>
              <p>Quality Work</p>
            </div>

            <div className="hero-feature">
              <span>✓</span>
              <p>Reliable Service</p>
            </div>

            <div className="hero-feature">
              <span>✓</span>
              <p>Affordable Price</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">

          <div className="hero-image-card">

            <img
              src={heroImage}
              alt="Professional electrician working"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;