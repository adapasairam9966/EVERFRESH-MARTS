// Wishlist.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "./store";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const moveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">❤️ Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-muted">Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
              <div
                className="card h-100 shadow-lg border-0 rounded-4 position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f5f7fa, #e4ebf5)",
                  transition: "transform 0.3s",
                  minHeight: "350px", // ✅ match VegCard height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Product Image */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "220px",
                    backgroundColor: "#f0f4f8",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // ✅ same as VegCard
                    }}
                  />
                </div>

                {/* Body */}
                <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h5 className="fw-bold">{item.name}</h5>
                    <h6 className="text-success fw-semibold mt-1">
                      ₹ {item.price}
                    </h6>
                  </div>

                  {/* Move to Cart Button */}
                  <button
                    className="btn btn-warning w-100 mt-3 fw-bold"
                    onClick={() => moveToCart(item)}
                    style={{ letterSpacing: "0.5px" }}
                  >
                    🛒 Move to Cart
                  </button>
                </div>

                {/* Hover Effect */}
                <style>
                  {`
                  .card {
                    transition: all 0.3s ease-in-out;
                  }
                  .card:hover {
                    transform: translateY(-8px) scale(1.03);
                    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.25);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    background: linear-gradient(135deg, #ffffff, #f0f4ff);
                  }
                  .card img {
                    transition: transform 0.3s ease-in-out;
                  }
                `}
                </style>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
