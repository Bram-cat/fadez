import React from "react";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Haircut",
      description: "Professional haircut tailored to your style",
      price: "$27",
      duration: "45mins-1hr",
    },
    {
      id: 2,
      name: "Beard Trim",
      description: "Precise beard trimming and shaping",
      price: "$20",
      duration: "30 mins",
    },
    {
      id: 3,
      name: "Hair & Beard Combo",
      description: "Complete grooming package",
      price: "$32",
      duration: "1hr-1hr 15mins",
    },
    {
      id: 4,
      name: "Kids Haircut",
      description: "Gentle haircuts for children",
      price: "$25",
      duration: "45 mins",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="service-details">
              <span className="price">{service.price}</span>
              <span className="duration">{service.duration}</span>
            </div>
            <a
              href="https://fadesbyjazzbarbershop.resurva.com/book"
              className="book-now"
            >
              <button className="book-button">Book Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
