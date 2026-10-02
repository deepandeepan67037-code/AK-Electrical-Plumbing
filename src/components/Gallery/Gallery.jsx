import "./Gallery.css";

import electrical1 from "../../assets/electrical.jpeg";
import electrical2 from "../../assets/wire.jpeg";
import plumbing1 from "../../assets/plumbing.jpeg";
import plumbing2 from "../../assets/pipe.jpeg";


function Gallery() {
  const projects = [
    {
      image: electrical1,
      category: "Electrical",
      title: "Electrical Installation",
    },
    {
      image: electrical2,
      category: "Electrical",
      title: "Professional Wiring Work",
    },
    {
      image: plumbing1,
      category: "Plumbing",
      title: "Bathroom Plumbing",
    },
    {
      image: plumbing2,
      category: "Plumbing",
      title: "Pipe Installation",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-heading">

          <span className="section-label">
            OUR WORK
          </span>

          <h2>
            Quality Work, <span>Professional Results</span>
          </h2>

          <p>
            Take a look at some examples of electrical, plumbing and
            maintenance work. Every project is approached with care,
            safety and attention to detail.
          </p>

        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button className="active">All Work</button>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">

          {projects.map((project, index) => (
            <div className="gallery-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="gallery-overlay">

                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <a href="#contact">
                  Contact Us →
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="gallery-bottom">

          <p>
            Have a similar project in mind?
          </p>

          <a href="#contact">
            Get In Touch →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Gallery;