function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>

            <div className="timeline-content gradient-card">
              <div className="company-logo">
                <i className="fas fa-building"></i>
              </div>

              <h3>Frontend Developer Intern</h3>
              <h4>Orangebits Software Technologies Pvt. Ltd</h4>
              <p className="timeline-date">
                Aug 2025 – Jan 2026 | Nagpur, Maharashtra
              </p>

              <ul className="timeline-description">
                <li>Built and maintained React.js components</li>
                <li>Integrated REST APIs and handled errors</li>
                <li>Resolved UI and functionality bugs</li>
                <li>Implemented responsive design practices</li>
                <li>Collaborated using Git and GitHub</li>
              </ul>

              <div className="timeline-tags">
                <span className="tag">React.js</span>
                <span className="tag">JavaScript</span>
                <span className="tag">REST APIs</span>
                <span className="tag">Git</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>

            <div className="timeline-content gradient-card">
              <div className="company-logo">
                <i className="fas fa-building"></i>
              </div>

              <h3>Web Development Intern</h3>
              <h4>Yhills Edutech Pvt. Ltd</h4>
              <p className="timeline-date">Mar 2023 – Apr 2023 | Remote</p>

              <ul className="timeline-description">
                <li>Developed responsive web interfaces</li>
                <li>Used Git for collaborative development</li>
                <li>Enhanced UI consistency and browser compatibility</li>
              </ul>

              <div className="timeline-tags">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
