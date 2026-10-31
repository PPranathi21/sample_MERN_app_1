
import "./about.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <span className="about-tag">WHO WE ARE</span>

          <h1>About Our Website</h1>

          <p>
            Discover who we are, what we do, and how we make
            technology useful, simple, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container about-content">
        <div className="row align-items-center g-4">

          <div className="col-lg-6">
            <div className="about-image-box">
              <div className="about-icon">✦</div>
              <h2>Welcome to MyWebsite</h2>
              <p>Innovation • Creativity • Technology</p>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="section-title">Who We Are</h2>

            <p className="about-description">
              Our website is designed to provide users with a
              simple, interactive, and user-friendly experience.
              We aim to make information easily accessible through
              modern web technologies.
            </p>

            <h3 className="mission-title">Our Mission</h3>

            <p className="about-description">
              Our mission is to create a platform that connects
              people with technology and provides a smooth
              browsing experience across all devices.
            </p>

            <div className="about-highlight">
              <span>✓</span> User-friendly design
              <br />
              <span>✓</span> Responsive layout
              <br />
              <span>✓</span> Simple navigation
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
