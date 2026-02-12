import { useEffect, useState } from "react";
import profile from "../assets/images/Profile-VJ.jpeg";

function Home() {
  const text = "Hi, I'm Vinayak";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="greeting">{displayText}</h1>
            <h2 className="title">Software Developer | React & Node.js</h2>

            <p className="description">
              Software Developer specializing in building responsive and
              scalable web applications using modern JavaScript technologies.
            </p>

            <div className="social-links">
              <h3>Let's connect on</h3>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/vinayak-jaunjal-032489270"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="mailto:vinayakjaunjal2003@gmail.com"
                  className="social-icon"
                >
                  <i className="fas fa-envelope"></i>
                </a>

                <a href="tel:+918208027615" className="social-icon">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>

            <div className="social-links">
              <h3>See My Work On</h3>
              <div className="social-icons">
                <a
                  href="https://github.com/Vinayakjaunjal"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <a href="/resume.pdf" download className="btn-primary">
              Download Resume
            </a>
          </div>

          <div className="home-image">
            <div className="profile-circle">
              <img src={profile} alt="Vinayak" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
