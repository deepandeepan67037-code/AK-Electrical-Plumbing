import "./WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "👨‍🔧",
      title: "Experienced Professionals",
      description:
        "Skilled professionals who understand electrical and plumbing work and focus on quality results.",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description:
        "We follow safe working practices to help protect your home, business and property.",
    },
    {
      icon: "⭐",
      title: "Quality Work",
      description:
        "We focus on reliable workmanship and practical solutions for every project.",
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description:
        "Clear and reasonable pricing with a focus on providing value for your money.",
    },
    {
      icon: "⏰",
      title: "On-Time Service",
      description:
        "We respect your time and aim to complete service work efficiently and professionally.",
    },
    {
      icon: "🤝",
      title: "Customer Satisfaction",
      description:
        "We listen to your requirements and work to provide a smooth and dependable service experience.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">

          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Service You Can <span>Trust</span>
          </h2>

          <p>
            We combine professional workmanship, safety and dependable
            customer service to deliver electrical and plumbing solutions
            for homes and businesses.
          </p>

        </div>

        {/* Cards */}
        <div className="why-grid">

          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="why-cta">

          <div className="why-cta-content">
            <span>NEED PROFESSIONAL HELP?</span>

            <h3>
              Let's Solve Your Electrical or Plumbing Problem
            </h3>

            <p>
              Get in touch with AK Electrical & Plumbing today.
            </p>
          </div>

          <div className="why-cta-buttons">

            <a href="tel:+919789119789" className="why-call">
              📞 Call Now
            </a>

            <a href="#contact" className="why-quote">
              Get In Touch →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;