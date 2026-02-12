function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:vinayakjaunjal2003@gmail.com">
                    vinayakjaunjal2003@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91-8208027615</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Nagpur, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper ">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
