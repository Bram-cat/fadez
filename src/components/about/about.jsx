import React from "react";
import "../styles/about.css";
import jazz from "../../assets/fades.png";
import sk from "../../assets/SKbarber.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Fadez by Jazz</h1>
        <p>Your Premium Barbershop Experience in Charlottetown</p>
      </div>

      <div className="about-content">
        <div className="about-sections">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2022, Fadez by Jazz emerged as Charlottetown's premier
              destination for exceptional grooming services. What started as a 
              passion for creating perfect cuts has grown into a thriving 
              barbershop known for its dedication to quality and customer satisfaction.
            </p>
            <p>
              Our journey began with a simple vision: to provide more than just
              haircuts – to create a space where clients can relax, refresh, and
              leave feeling confident. Today, we're proud to be a cornerstone of
              the Charlottetown community, serving clients from all walks of life.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Fadez by Jazz, we strive to provide each client with a personalized
              grooming experience that exceeds expectations. Our approach combines
              traditional barbering techniques with modern styles, ensuring you get
              the perfect look that matches your personality and lifestyle.
            </p>
            <p>
              We believe in creating lasting relationships with our clients through
              exceptional service, attention to detail, and a welcoming atmosphere
              that makes everyone feel at home.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Excellence</h3>
                <p>We maintain the highest standards in every cut and service</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Honest service and transparent communication with every client</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>Contributing positively to our local Charlottetown community</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>The Fadez Experience</h2>
            <p>
              Step into our modern facility equipped with top-of-the-line tools
              and amenities. We pride ourselves on maintaining a clean, comfortable,
              and welcoming environment where you can unwind while getting your
              perfect cut.
            </p>
            <p>
              Our services go beyond basic haircuts – we offer comprehensive
              grooming solutions including precision beard trims, hot towel
              services, and styling advice to help you maintain your look at home.
            </p>
          </div>
        </div>

        <div className="team-container">
          <h2 className="team-title">Meet Our Expert Team</h2>
          <p className="team-intro">
            Our skilled barbers bring years of experience and a passion for their
            craft to every cut. Each team member is dedicated to continuing
            education and staying current with the latest trends and techniques.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img className="pfp" src={jazz} alt="Jazz" />
              <h3>Jazz</h3>
              <p>Master Barber & Owner</p>
              <div className="social-links">
                <a
                  href="https://instagram.com/fadesbyjazz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
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
            <div className="team-member">
              <img className="pfp" src={sk} alt="sk barber" />
              <h3>SK barber</h3>
              <p>Barber</p>
              <div className="social-links">
                <a
                  href="https://instagram.com/fadesbyjazz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
