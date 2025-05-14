import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import heroImage from "../../assets/fadezlogo.png"; // Example image, replace with your own

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Fadez by Jazz</h1>
          <p>Premium Barbering Experience in Charlottetown</p>
          <Link to="/services" className="cta-button">
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-cut"></i>
            <h3>Expert Cuts</h3>
            <p>Precision haircuts tailored to your style</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-beer"></i>
            <h3>Relaxing Environment</h3>
            <p>Enjoy our premium barbershop experience</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Flexible Hours</h3>
            <p>Convenient scheduling that works for you</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2 className="shead">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Haircut</h3>
            <p>Classic or modern styles</p>
            <span className="price">$27</span>
          </div>
          <div className="service-card">
            <h3>Beard Trim</h3>
            <p>Shape and maintain</p>
            <span className="price">$20</span>
          </div>
          <div className="service-card">
            <h3>Kids Haircut</h3>
            <p>Traditional straight razor</p>
            <span className="price">$25</span>
          </div>
        </div>
        <Link to="/services" className="view-all-button">
          View All Services
        </Link>
      </section>

      <section className="about-preview">
        <div className="about-preview-content">
          <div className="about-preview-text">
            <h2>Why Choose Fadez by Jazz?</h2>
            <p>
              Since 2022, we've been dedicated to providing exceptional grooming
              services in Charlottetown. Our experienced team combines
              traditional techniques with modern styles to give you the perfect
              look.
            </p>
            <Link to="/about" className="learn-more-button">
              Learn More About Us
            </Link>
          </div>
          <div className="about-preview-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Expert Barbers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for a Fresh Look?</h2>
          <p>
            Book your appointment today and experience the best in barbering
          </p>
          <Link to="/services" className="cta-button">
            Book Now!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
