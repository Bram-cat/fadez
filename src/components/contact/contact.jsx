import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import config from "../../config/config";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    show: false,
    success: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, success: false, message: "" });

    // Add recipient email to form data
    const formData = new FormData(form.current);
    formData.append("to_email", config.emailjs.toEmail);
    console.log("Form data:", Object.fromEntries(formData));

    try {
      const result = await emailjs.sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        form.current,
        config.emailjs.publicKey
      );

      console.log("EmailJS Response:", result);

      if (result.text === "OK") {
        setStatus({
          show: true,
          success: true,
          message: "Message sent successfully!",
        });
        form.current.reset();
      }
    } catch (error) {
      console.error("Detailed error:", {
        message: error.message,
        text: error.text,
        stack: error.stack,
      });

      setStatus({
        show: true,
        success: false,
        message: `Failed to send: ${error.text || error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="info-section">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>165 Prince Street</p>
              <p>Charlottetown, PE</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>(902) 916-9227</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>helpbyjazz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        {status.show && (
          <div
            className={`status-message ${status.success ? "success" : "error"}`}
          >
            {status.message}
          </div>
        )}

        {/* Add hidden input for recipient email */}
        <input type="hidden" name="to_email" value="helpbyjazz@gmail.com" />

        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input type="text" id="from_name" name="from_name" required />
        </div>

        <div className="form-group">
          <label htmlFor="reply_to">Email</label>
          <input type="email" id="reply_to" name="reply_to" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
