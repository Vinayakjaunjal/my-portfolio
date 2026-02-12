function About() {
  return (
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">About Me</h2>

        <div class="about-content">
          <div class="about-text">
            <p>
              I'm a passionate Frontend Developer with hands-on experience
              building responsive and scalable web applications using React.js,
              JavaScript (ES6+), HTML5, and CSS3.
            </p>

            <p>
              During my internships, I worked on real-world projects involving
              REST API integration, debugging production issues, and building
              reusable UI components. I focus on writing clean, maintainable
              code and creating smooth user experiences.
            </p>

            <p>
              As a fresher, I am eager to contribute to impactful projects, grow
              alongside experienced developers, and continuously improve my
              technical expertise.
            </p>
          </div>

          <div class="about-tech">
            <h3>Technologies I Work With</h3>
            <div class="tech-chips">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div class="about-highlights">
            <div class="highlight-card">
              <i class="fas fa-code"></i>
              <h4>Frontend Development</h4>
              <p>Building modern and responsive React applications.</p>
            </div>

            <div class="highlight-card">
              <i class="fas fa-plug"></i>
              <h4>API Integration</h4>
              <p>Working with REST APIs and handling dynamic data.</p>
            </div>

            <div class="highlight-card">
              <i class="fas fa-lightbulb"></i>
              <h4>Problem Solving</h4>
              <p>Debugging issues and optimizing performance efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
