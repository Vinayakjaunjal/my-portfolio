import brownProject from "../assets/images/brown-project.png";
import agroProject from "../assets/images/agro-project.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </p>

        <div className="projects-grid">
          <div className="project-card gradient-card">
            <div className="project-image">
              <img
                src={brownProject}
                alt="Brown Salon Project"
                className="project-img"
              />
              <div className="project-icon-overlay">
                <i className="fas fa-calendar-check"></i>
              </div>
            </div>

            <div className="project-content">
              <h3>Brown Salon Appointment Booking System</h3>
              <p>
                Built a full-stack appointment booking system using React,
                Node.js, and MongoDB with authentication and CRUD functionality.
              </p>

              <div className="project-tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">MUI</span>
              </div>

              <a
                href="https://github.com/Vinayakjaunjal"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="project-card gradient-card">
            <div className="project-image">
              <img
                src={agroProject}
                alt="AI Farming Project"
                className="project-img"
              />
              <div className="project-icon-overlay">
                <i className="fas fa-brain"></i>
              </div>
            </div>

            <div className="project-content">
              <h3>AI Based Agro Farming Assistance</h3>
              <p>
                Built an AI-powered crop recommendation platform by integrating
                machine learning models with a PHP-MySQL backend.
              </p>

              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PHP</span>
                <span className="tag">MySQL</span>
                <span className="tag">Python</span>
              </div>

              <a
                href="https://github.com/Vinayakjaunjal"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
