import "./Services.css";

function Services() {
  const services = [
    {
      icon: "⚡",
      category: "Electrical",
      title: "Electrical Wiring",
      description:
        "Safe and reliable electrical wiring solutions for homes, offices and commercial spaces.",
    },
    {
      icon: "💡",
      category: "Electrical",
      title: "Lighting Installation",
      description:
        "Professional installation of indoor, outdoor, decorative and energy-efficient lighting.",
    },
    {
      icon: "🔧",
      category: "Electrical",
      title: "Electrical Repairs",
      description:
        "Quick troubleshooting and repair for electrical faults, switches, sockets and connections.",
    },
    {
      icon: "🚰",
      category: "Plumbing",
      title: "Plumbing Repairs",
      description:
        "Reliable plumbing repair services for taps, pipes, sinks, toilets and other fixtures.",
    },
    {
      icon: "💧",
      category: "Plumbing",
      title: "Water Leakage Repair",
      description:
        "Fast detection and repair of water leakage from pipes, bathrooms, kitchens and tanks.",
    },
    {
      icon: "🚿",
      category: "Plumbing",
      title: "Bathroom Plumbing",
      description:
        "Complete bathroom plumbing installation, maintenance and repair services.",
    },
    {
      icon: "🏠",
      category: "Maintenance",
      title: "Electrical & Plumbing Maintenance",
      description:
        "Complete electrical and plumbing maintenance solutions to keep your home safe and functional.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">

          <span className="section-label">
            OUR SERVICES
          </span>

          <h2>
            Complete {" "}
            <span>Electrical & Plumbing </span>
            Solutions
          </h2>

          <p>
            From small repairs to complete installations, we provide
            professional electrical and plumbing services with a focus on
            safety, quality and customer satisfaction.
          </p>

        </div>

        {/* Service Cards */}
        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <span className="service-category">
                {service.category}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Contact Us →
              </a>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="services-cta">

          <div>
            <h3>Need Electrical or Plumbing Help?</h3>

            <p>
              Contact us today and tell us what service you need.
            </p>
          </div>

          <a href="#contact">
            Get In Touch →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;