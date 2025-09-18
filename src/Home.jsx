import React from "react";
import { Bag, CartCheck, StarFill } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

import "./Home.css"; 

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <div
        className="hero-section d-flex align-items-center text-start text-white"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/fresh-food-groceries-tray-box-wood-tabletop-banner-background_8087-2719.jpg?w=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px", // Adjusted height
        }}
      >
        <div className="container text-end">
          {/* Title */}
          <h1 className="fw-bold display-3">
            <span className="text-dark">Welcome to</span>{" "}
            <span className="text-warning">EverFresh Mart</span>
          </h1>

          {/* Subtitle */}
          <p className="fs-4 text-dark">
            Your one-stop shop for all your daily needs 🛒
          </p>

          {/* Button centered under paragraph */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-success px-4 py-2 rounded-pill fw-semibold shadow-sm mt-3"
              onClick={() => navigate("/veg")}
            >
              <Bag className="me-2" /> Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Featured Items Carousel ================= */}
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left-side Content Column */}
          <Col lg={6} className="d-flex flex-column justify-content-center p-4">
            <h2 className="fw-bold mb-3">Featured Items</h2>
            <p className="lead mb-4">
              Explore our wide range of fresh, organic, and high-quality products. From farm-fresh dairy to a variety of seasonal fruits and vegetables, we offer the best for your kitchen.
            </p>
            <div className="d-grid gap-2 d-md-block">
              {/* The Link component handles navigation to the /about page */}
              <Link to="/aboutus">
                <Button variant="primary" size="lg">
                  Know More
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right-side Carousel Column */}
          <Col lg={6}>
            <Carousel fade interval={2500}>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded bg-light"
                  src={"public/milk/all milk.jpg"}
                  alt="milk products"
                  style={{ objectFit: 'contain', height: '400px' }}
                />
                <Carousel.Caption>
                  <h5>Fresh Milk Products</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 rounded bg-light"
                  src={"public/veg11.jpg"}
                  alt="Organic vegetables"
                  style={{ objectFit: 'contain', height: '400px' }}
                />
                <Carousel.Caption>
                  <h5>Organic Vegetables</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 rounded bg-light"
                  src={"public/fruits/all fruits.jpg"}
                  alt="Fresh fruits"
                  style={{ objectFit: 'contain', height: '400px' }}
                />
                <Carousel.Caption>
                  <h5>Fresh Fruits</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>


      {/* ================= Our Promise Section ================= */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our Promise</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 hover-card">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-3" style={{ width: "70px", height: "70px" }}>
                <CartCheck size={32} />
              </div>
              <h5 className="fw-bold mb-2">Fast Delivery</h5>
              <p className="text-muted">
                Essentials delivered quickly <br /> to your doorstep 🚀
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 hover-card">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 text-warning rounded-circle mb-3" style={{ width: "70px", height: "70px" }}>
                <StarFill size={32} />
              </div>
              <h5 className="fw-bold mb-2">Best Quality</h5>
              <p className="text-muted">
                Premium products with <br /> freshness guaranteed 🌱
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 hover-card">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle mb-3" style={{ width: "70px", height: "70px" }}>
                <Bag size={32} />
              </div>
              <h5 className="fw-bold mb-2">Affordable Prices</h5>
              <p className="text-muted">
                Shop more, spend less <br /> with exciting offers 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Our Menu</h2>
      <div className="row g-4">
        {/* Veg Card */}
        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 h-100 menu-card">
            <img
              src="public/veg11.jpg"
              className="card-img-top rounded-top"
              alt="Veg"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold">Vegetarian</h5>
              <button
                onClick={() => navigate("/veg")}
                className="btn btn-outline-success"
              >
                Show Details
              </button>
            </div>
          </div>
        </div>

        {/* Non Veg Card */}
        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 h-100 menu-card">
            <img
              src="public/nonveg.jpg"
              className="card-img-top rounded-top"
              alt="Non Veg"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold">Non-Veg</h5>
              <button
                onClick={() => navigate("/nonveg")}
                className="btn btn-outline-danger"
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
        
        {/* Fresh Fruits Card */}
        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 h-100 menu-card">
            <img
              src="public/fruits/all fruits.jpg"
              className="card-img-top rounded-top"
              alt="Fresh Fruits"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold">Fresh Fruits</h5>
              <button
                onClick={() => navigate("medicen")}
                className="btn btn-outline-info"
              >
                Show Details
              </button>
            </div>
          </div>
        </div>

        {/* Fresh Milk Card */}
        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 h-100 menu-card">
            <img
              src="public/milk/all milk.jpg"
              className="card-img-top rounded-top"
              alt="Fresh Milk"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold">Fresh Milk</h5>
              <button
                onClick={() => navigate("/milk")}
                className="btn btn-outline-warning"
              >
                Show Details
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>


      {/* ================= Testimonials Section ================= */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
        <Carousel interval={3000}>
          {/* Testimonial 1 */}
          <Carousel.Item>
            <div className="card text-center p-4 bg-light rounded shadow border-0">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Priya Sharma"
                className="rounded-circle mx-auto d-block"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="fs-5 text-muted">
                  "MiniMart makes grocery shopping so easy and affordable!"
                </p>
                <h6 className="fw-bold mt-3">- Priya Sharma</h6>
              </div>
            </div>
          </Carousel.Item>

          {/* Testimonial 2 */}
          <Carousel.Item>
            <div className="card text-center p-4 bg-light rounded shadow border-0">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Rahul Verma"
                className="rounded-circle mx-auto d-block"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="fs-5 text-muted">
                  "Fresh veggies and quick delivery every time!"
                </p>
                <h6 className="fw-bold mt-3">- Rahul Verma</h6>
              </div>
            </div>
          </Carousel.Item>

          {/* Testimonial 3 */}
          <Carousel.Item>
            <div className="card text-center p-4 bg-light rounded shadow border-0">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Sneha Patel"
                className="rounded-circle mx-auto d-block"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="fs-5 text-muted">
                  "Great prices and wide selection of items!"
                </p>
                <h6 className="fw-bold mt-3">- Sneha Patel</h6>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
}

export default Home;
