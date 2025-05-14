import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fades by Jazz</h3>
          <p>Providing professional hair styling since 2022</p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/fadesbyjazz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 165 Prince Street,
              Charlottetown, PE
            </li>
            <li>
              <i className="fas fa-envelope"></i> helpbyjazz@gmail.com
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>Monday: 10am - 7pm</li>
            <li>Tuesday: 2:30pm - 6:30pm</li>
            <li>Wednesday: 10am - 7pm</li>
            <li>Thursday: 10am - 7pm</li>
            <li>Friday: 10am - 7:30pm</li>
            <li>Saturday: 10am - 7:30pm</li>
            <li>Sunday: 10am - 7pm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Fadez by Jazz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
