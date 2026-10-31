
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Welcome Section */}
      <section className="home-welcome">
        <div className="container text-center">
          <span className="home-badge">WELCOME TO MYWEBSITE</span>

          <h1>Explore Something New!</h1>

          <p>
            Discover our website and enjoy a simple,
            attractive, and user-friendly experience.
          </p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="container home-carousel-section">

        <div className="carousel-heading">
          <div>
            <h2>Explore Our Gallery</h2>
            <p>Take a look at our featured images.</p>
          </div>
        </div>

        <div
          id="homeCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >

          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner home-carousel-inner">

            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                alt="Gallery image one"
              />
              <div className="carousel-caption">
                <h3>Discover New Experiences</h3>
                <p>Explore and enjoy every moment.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="Gallery image two"
              />
              <div className="carousel-caption">
                <h3>Creativity and Innovation</h3>
                <p>Bringing ideas to life through technology.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                alt="Gallery image three"
              />
              <div className="carousel-caption">
                <h3>Welcome to Our World</h3>
                <p>A simple and enjoyable digital experience.</p>
              </div>
            </div>

          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>

      {/* Bottom Welcome Card */}
      <section className="container home-bottom">
        <h2>Welcome to MyWebsite!</h2>
        <p>
          We aim to provide a smooth, accessible, and
          responsive experience for every user.
        </p>
      </section>

    </div>
  );
}

export default Home;
