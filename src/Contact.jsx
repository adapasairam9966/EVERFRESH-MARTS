import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold mb-3">Contact Us</h1>
        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Get in touch with us through the form or
          contact details below.
        </p>
<div className="row g-4">
  {/* Contact Form */}
  <div className="col-md-6 h-100">
    <div className="card shadow-sm rounded-4 p-4">
      <h4 className="mb-3 text-warning">Send a Message</h4>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* New Subject Field */}
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning w-100">
          Send Message
        </button>
      </form>
    </div>
  </div>

  {/* Contact Info */}
  <div className="col-md-6 h-100">
    <div className="card shadow-sm  rounded-4 p-4">
      <h4 className="mb-3 text-warning">Reach Us At</h4>
      <p>
        <i className="bi bi-geo-alt-fill text-danger me-2"></i> 123 Main
        Street, Hyderabad, India
      </p>
      <p>
        <i className="bi bi-telephone-fill text-success me-2"></i> +91
        9966486982
      </p>
      <p>
        <i className="bi bi-envelope-fill text-primary me-2"></i>{" "}
        support@everfreshmart.com
      </p>

      <h5 className="mt-4 mb-3 text-warning">Find Us on Map</h5>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.302057214339!2d78.48667131536233!3d17.38504498807747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9788d358f7b7%3A0xb0e0f8e3b53a0fbd!2sCharminar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1694015588991!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Contact;
