import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, removeFromWishlist } from "./store";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";

function VegCard({ item }) {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const [added, setAdded] = useState(false);

  const inWishlist = wishlist.find(w => w.id === item.id);

  const handleWishlist = () => {
    if (inWishlist) {
      dispatch(removeFromWishlist(item.id));
      toast.info(`${item.name} removed from wishlist ❌`);
    } else {
      dispatch(addToWishlist(item));
      toast.success(`${item.name} added to wishlist ❤️`);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    setAdded(true);
    toast.success(`${item.name} added to cart 🛒`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card h-100 shadow-lg border-0 rounded-4 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f5f7fa, #e4ebf5)",
          transition: "transform 0.3s",
          minHeight: "350px", // ✅ Increased height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Wishlist Button */}
        <button
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm"
          onClick={handleWishlist}
          style={{ zIndex: 2 }}
        >
          {inWishlist ? (
            <HeartFill className="text-danger" size={22} />
          ) : (
            <Heart className="text-danger" size={22} />
          )}
        </button>

        {/* Product Image */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "220px", backgroundColor: "#f0f4f8" }} // ✅ taller image area
        >
           <img
  src={item.image}
  alt={item.name}
  style={{
    width: "100%",        // take full card width
    height: "100%",       // take full card height
    objectFit: "cover",   // cover the whole area, crop edges if needed
  }}
/>



        </div>

        {/* Body */}
        <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <h5 className="fw-bold">{item.name}</h5>
            <h6 className="text-success fw-semibold mt-1">₹ {item.price}</h6>
          </div>

          {/* Add to Cart Button */}
          <button
            className="btn btn-warning w-100 mt-3 fw-bold"
            onClick={handleAddToCart}
            disabled={added}
            style={{ letterSpacing: "0.5px" }}
          >
            {added ? " Added" : " Add to Cart"}
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
      background: linear-gradient(135deg, #ffffff, #f0f4ff); /* subtle glow */
    }
    .card img {
      transition: transform 0.3s ease-in-out;
    }
  `}
</style>

      </div>
    </div>
  );
}

export default VegCard;
