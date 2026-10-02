import "./About.css";
import aboutImage from "../../assets/merge.jpeg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Image Side */}
        <div className="about-image-wrapper">

          <div className="about-image-card">
            <img
              src={aboutImage}
              alt="Professional electrical service"
            />
          </div>

          <div className="about-experience">
            <strong>20+</strong>
            <span>Years of<br />Experience</span>
          </div>

        </div>

        {/* Content Side */}
        <div className="about-content">

          <span className="section-label">
            ABOUT US
          </span>

          <h2>
            Trusted {" "}
            <span>Electrical & Plumbing </span>
            Experts
          </h2>

          <p className="about-intro">
            AK Electrical & Plumbing provides dependable electrical and
            plumbing services for homes, offices and commercial spaces.
            Our focus is on quality workmanship, safety and reliable
            customer service.
          </p>

          <p>
            Whether you need an electrical repair, new wiring, lighting
            installation, water leakage repair or complete plumbing work,
            our goal is to provide practical solutions that meet your needs.
          </p>

          <div className="about-points">

            <div className="about-point">
              <span>✓</span>
              <div>
                <h4>Quality Workmanship</h4>
                <p>
                  We focus on clean, reliable and professional work.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>✓</span>
              <div>
                <h4>Safety First</h4>
                <p>
                  Safety is an important part of every electrical and
                  plumbing job.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>✓</span>
              <div>
                <h4>Customer Satisfaction</h4>
                <p>
                  We aim to provide dependable service and clear
                  communication.
                </p>
              </div>
            </div>

          </div>

          <a href="#contact" className="about-button">
            Talk to Us →
          </a>

        </div>

      </div>

      {/* Statistics */}
      <div className="about-stats">

        <div className="stat-item">
          <strong>20+</strong>
          <span>Years Experience</span>
        </div>

        <div className="stat-item">
          <strong>200+</strong>
          <span>Projects Completed</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Quality Focus</span>
        </div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>Service Support</span>
        </div>

      </div>

    </section>
  );
}

export default About;