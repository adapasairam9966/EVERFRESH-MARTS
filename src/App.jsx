// App.jsx
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Milk from './Milk';
import Veg from './Veg';
import Nonveg from './Nonveg';
import Medicen from './Medicen';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Orders from './OrdersHistory';
import Signin from './Signin';
import SignUp from './SignUp';
import PageNotFound from './PageNotFound';
import SearchBar from './SearchBar'; // ✅ ensure path is correct
import { logoutUser } from './store';

function AppContent() {
  const totalQuantity = useSelector(
    (state) => state.Cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const wishlistCount = useSelector((state) => state.wishlist.length);

  const collapseRef = useRef(null);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  // ✅ Check localStorage for login state on load
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(loginStatus);
    if (user) setUsername(user);
  }, []);

  const handleNavClick = useCallback(() => {
    if (!collapseRef.current || !window.bootstrap?.Collapse) return;
    const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(
      collapseRef.current,
      { toggle: false }
    );
    bsCollapse.hide();
  }, []);

  const handleSearch = (query) => {
    toast.info(`🔍 Searching for: ${query}`);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUsername("");
    dispatch(logoutUser());

    toast.success("✅ Signed out successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    // ⏳ Navigate to Signin after 2s (after toast shows)
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  return (
    <>
      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* 🔹 First Row (Logo, Search, SignIn/SignUp) */}
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold text-warning" to="/" onClick={handleNavClick}>
            <i className="bi bi-shop me-2"></i> EverFresh Mart
          </NavLink>

          {/* SearchBar */}
          <SearchBar onSearch={handleSearch} />

          {/* SignIn / SignUp or Username + SignOut */}
          <div className="d-flex align-items-center">
            {!isLoggedIn && (
              <>
                <NavLink to="/signin" className="nav-link text-light" onClick={handleNavClick}>
                  <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
                </NavLink>
                <span className="text-light mx-1">/</span>
                <NavLink to="/signup" className="nav-link text-light" onClick={handleNavClick}>
                  <i className="bi bi-person-plus-fill me-1"></i> Sign Up
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <span className="text-light me-3">Hello user</span>
                <button 
                  className="btn btn-warning btn-sm fw-bold px-3" 
                  onClick={handleSignOut}
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* 🔹 Second Row (Main Links) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-house-door-fill me-1 "></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/veg" className="nav-link" onClick={handleNavClick}>
                  <i><span className="me-1">🥕</span></i> Veg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nonveg" className="nav-link" onClick={handleNavClick}>
                  <i><span className="me-1">🍗</span></i> NonVeg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/medicen" className="nav-link" onClick={handleNavClick}>
                  <i><span className="me-1">🍎</span></i> Fruits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/milk" className="nav-link" onClick={handleNavClick}>
                  <i><span className="me-1">🥛</span></i> Milk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/orders" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-card-checklist me-1"></i> Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-heart-fill me-1 text-danger"></i> Wishlist
                  {wishlistCount > 0 && (
                    <span className="badge bg-danger text-white rounded-pill ms-2">
                      {wishlistCount}
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-cart-fill me-1"></i> Cart
                  {totalQuantity > 0 && (
                    <span className="badge bg-warning text-dark rounded-pill ms-2">
                      {totalQuantity}
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-envelope-fill me-1"></i> Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-info-circle-fill me-1"></i> About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/medicen" element={<Medicen />} />
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-dark text-light pt-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">EverFresh Mart</h5>
              <p>Your one-stop shop for fresh groceries, dairy, and more. We deliver quality products right to your doorstep.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Quick Links</h5>
              <ul className="list-unstyled">
                <li><NavLink to="/" className="text-light text-decoration-none">Home</NavLink></li>
                <li><NavLink to="/aboutus" className="text-light text-decoration-none">About Us</NavLink></li>
                <li><NavLink to="/contact" className="text-light text-decoration-none">Contact Us</NavLink></li>
                <li><NavLink to="/orders" className="text-light text-decoration-none">Orders</NavLink></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <p className="text-center mb-0 pb-3">© {new Date().getFullYear()} EverFresh Mart. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
