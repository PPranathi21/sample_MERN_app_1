
import "./footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row align-items-center gy-3 text-center text-md-start">

          {/* Website Name */}
          <div className="col-md-4">
            <h5 className="footer-brand">
              <span>✦</span> MyWebsite
            </h5>
            <p className="footer-tagline mb-0">
              Connecting people through technology.
            </p>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center">
            <p className="copyright-text mb-0">
              &copy; 2026 Pranathi. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <div className="col-md-4 text-md-end">
            <a href="#top" className="back-to-top">
              Back to Top ↑
            </a>
          </div>

        </div>

        <hr className="footer-divider" />

        <p className="footer-bottom-text text-center mb-0">
          Made with <span className="heart">♥</span> by Pranathi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
