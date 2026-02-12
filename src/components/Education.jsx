import nitImage from "../assets/images/NIT-image.jpeg";
import schoolImage from "../assets/images/JVV-Image.jpg";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <h3 className="section-subtitle-large">Academic Background</h3>

        <div className="education-grid">
          <div className="education-card gradient-card">
            <div className="education-image">
              <img src={nitImage} alt="Nagpur Institute of Technology" />
              <div className="education-icon-overlay">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>

            <div className="education-content">
              <h3>B.Tech in Computer Science</h3>
              <h4>Nagpur Institute of Technology, Nagpur</h4>
              <p className="education-date">
                2021 - 2025 | <span>Completed</span>
              </p>
              <p className="education-score">CGPA: 7.13 / 10</p>
            </div>
          </div>

          <div className="education-card gradient-card">
            <div className="education-image">
              <img src={schoolImage} alt="Jeevan Vikas Vidyalaya" />
              <div className="education-icon-overlay">
                <i className="fas fa-school"></i>
              </div>
            </div>

            <div className="education-content">
              <h3>Higher Secondary Certificate (12th)</h3>
              <h4>Jeevan Vikas Vidyalaya, Umred</h4>
              <p className="education-date">
                2020 - 2021 | <span>Completed</span>
              </p>
              <p className="education-score">Percentage: 78%</p>
            </div>
          </div>
        </div>

        <h3 className="section-subtitle-large certifications-title">
          Professional Certifications
        </h3>

        <div className="certifications-grid">
          <div className="certification-card gradient-card">
            <div className="cert-icon">
              <i className="fab fa-aws"></i>
            </div>

            <h4>AWS Academy Cloud Foundations</h4>
            <p>AWS Academy Graduate</p>
            <p className="cert-date">Sep 2023</p>

            <a
              href="https://drive.google.com/file/d/1RZkfGAFEP88yTO8Nks0ooo1p2z6tTpF4/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
              View Certificate <i className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="certification-card gradient-card">
            <div className="cert-icon">
              <i className="fas fa-network-wired"></i>
            </div>

            <h4>JNCIA-Junos</h4>
            <p>Juniper Networks Certified Associate</p>
            <p className="cert-date">Oct 2023</p>

            <a
              href="https://drive.google.com/file/d/1S2d-yIKfv7EuLSD9Gxc53Fm4Tnzim4tZ/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
              View Certificate <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
