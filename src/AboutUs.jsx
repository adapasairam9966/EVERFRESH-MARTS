import React from "react";

function AboutUs() {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* Page Heading */}
        <h1 className="text-center fw-bold mb-4">About Us</h1>
        <p className="text-center text-muted mb-5">
          Welcome to <span className="fw-bold text-success">EverFresh Mart</span>, your one-stop shop for fresh groceries,
          dairy, and daily essentials. We are committed to making your shopping
          experience easier, faster, and better every day.
        </p>

        {/* Who We Are */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="public/1.jpeg"
              alt="Who We Are"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Who We Are</h3>
            <p className="text-muted">
              We are a trusted e-commerce platform designed to bring you the
              freshest produce, top-quality products, and best brands—all at the
              click of a button. Whether it’s vegetables, fruits, dairy, or
              household essentials, we have it covered.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img
              src="public/2.jpeg"
              alt="Our Mission"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Our Mission</h3>
            <p className="text-muted">
              Our mission is simple: to make grocery shopping convenient and
              affordable. We believe in saving your time and effort by
              delivering high-quality products right to your doorstep.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-5">
          <h3 className="fw-bold">Our Values</h3>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-4 shadow-sm bg-white rounded-3">
                <h5 className="fw-bold text-success">Freshness</h5>
                <p className="text-muted">
                  Only the freshest produce and quality goods for your family.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow-sm bg-white rounded-3">
                <h5 className="fw-bold text-success">Trust</h5>
                <p className="text-muted">
                               We deliver what we promise—on time, every time.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow-sm bg-white rounded-3">
                <h5 className="fw-bold text-success">Customer First</h5>
                <p className="text-muted">
                  Your satisfaction is our priority, always.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="public/4.jpeg"
              alt="Why Choose Us"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Why Choose Us?</h3>
            <ul className="text-muted">
              <li>✔ Wide range of groceries and essentials</li>
              <li>✔ Affordable prices with great discounts</li>
              <li>✔ Fast and reliable home delivery</li>
              <li>✔ 24/7 customer support</li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <h4 className="fw-bold text-success">Join the EverFresh Mart Family Today!</h4>
          <p className="text-muted">
            Experience hassle-free shopping with us. Freshness, quality, and
            trust—delivered to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
