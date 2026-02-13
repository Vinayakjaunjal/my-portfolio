import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send message to you
    emailjs
      .sendForm(
        "service_6gsnbmr",
        "template_fkqjeq2",
        form.current,
        "KxGTZ_LnSYvuP-PG8",
      )
      .then(() => {
        // Auto reply
        emailjs.sendForm(
          "service_6gsnbmr",
          "template_wiaz0w8",
          form.current,
          "KxGTZ_LnSYvuP-PG8",
        );

        toast.success("Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message!");
        setLoading(false);
      });
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

          <div className="contact-form-wrapper">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
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
