
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container text-center">
          <span className="contact-badge">GET IN TOUCH</span>

          <h1>Contact Us</h1>

          <p>
            You can contact us using the details below.
            We are always happy to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="container contact-content">

        <div className="row g-4">

          {/* Email */}
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h4>Email Us</h4>
              <p>Send us your queries anytime.</p>
              <a href="mailto:info@mywebsite.com">
                info@mywebsite.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Call Us</h4>
              <p>Feel free to reach us by phone.</p>
              <a href="tel:+911234567890">
                +91 12345 67890
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h4>Our Location</h4>
              <p>Visit us at our office.</p>
              <span>Hyderabad, India</span>
            </div>
          </div>

        </div>

        {/* Contact Message */}
        <div className="contact-message text-center">
          <h2>We'd Love to Hear From You!</h2>
          <p>
            Have questions, suggestions, or feedback?
            Get in touch with us. We will be happy to assist you.
          </p>

          <a href="mailto:info@mywebsite.com" className="contact-btn">
            Send an Email →
          </a>
        </div>

      </section>
    </div>
  );
}

export default Contact;
