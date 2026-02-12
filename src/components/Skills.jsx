function Skills() {
  const skills = [
    { name: "React.js", icon: "fab fa-react", type: "react" },
    { name: "JavaScript", icon: "fab fa-js", type: "javascript" },
    { name: "HTML5", icon: "fab fa-html5", type: "html" },
    { name: "CSS3", icon: "fab fa-css3-alt", type: "css" },
    { name: "Node.js", icon: "fab fa-node", type: "node" },
    { name: "Express.js", icon: "fas fa-server", type: "express" },
    { name: "MongoDB", icon: "fas fa-database", type: "mongodb" },
    { name: "MySQL", icon: "fas fa-database", type: "mysql" },
    { name: "Git", icon: "fab fa-git-alt", type: "git" },
    { name: "GitHub", icon: "fab fa-github", type: "github" },
    { name: "REST APIs", icon: "fas fa-network-wired", type: "api" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", type: "bootstrap" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid gradient-card">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card " data-skill={skill.type}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
