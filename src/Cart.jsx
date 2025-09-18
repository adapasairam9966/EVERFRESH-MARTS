// Cart.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { QRCodeCanvas } from "qrcode.react";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  addOrder,
} from "./store";

import {
  calculateButtonDiscount,
  calculateTotal,
} from "./discountUtils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [couponCodeResult, setCouponCodeResult] = useState({
    isValid: false,
    discountPercentage: 0,
    discountAmount: 0,
  });
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [cuponCode, setCuponCode] = useState("");
  const [buttonDiscount, setbuttonDiscount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const {isAuthenticated}= useSelector(state=>state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart);

  let totalAmount = calculateTotal(cartItems);
  let discountAmount = calculateButtonDiscount(totalAmount, buttonDiscount);
  let shippingCost = totalAmount < 1 ? 50 : 0;
  let tax = totalAmount * 0.05;

  let finalPrice =
    totalAmount -
    discountAmount -
    couponCodeResult.discountAmount +
    shippingCost +
    tax;

  if (cartItems.length === 0) {
    return (
      <div className="container-fluid my-3">
        <h2 className="text-center">🛒 Cart is empty</h2>
      </div>
    );
  }

  // ✅ Coupon Handler
  const handleApplyCoupon = () => {
    

    if (coupons[cuponCode]) {
      // remove previous coupon first
      if (appliedCoupon) {
        toast.info(`ℹ️ Coupon "${appliedCoupon}" removed`);
      }

      const discountPercentage = coupons[cuponCode];
      const discountAmount = (totalAmount * discountPercentage) / 100;
      setCouponCodeResult({
        isValid: true,
        discountPercentage,
        discountAmount,
      });
      setAppliedCoupon(cuponCode);
      setErrorMsg("");
      toast.success(
        `🎉 Coupon "${cuponCode}" applied! You saved ${discountPercentage}%`
      );
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
      setCouponCodeResult({
        isValid: false,
        discountPercentage: 0,
        discountAmount: 0,
      });
      setAppliedCoupon("");
      setErrorMsg("❌ Invalid coupon code. Try SAVE10, SAVE20, SAVE30.");
      toast.error("❌ Invalid coupon code!");
    }
  };

  // ✅ Discount Button Handler
  const applyButtonDiscount = (percentage) => {
    if (percentage > 0) {
      toast.success(`✅ ${percentage}% discount applied!`);
    } else {
      toast.info("ℹ️ Discount removed");
    }
    setbuttonDiscount(percentage);
  };

  const proceedOrder = async () => {
    if (!userEmail.trim()) {
      toast.error("❌ Please enter a valid email!");
      return;
    }

    // Confetti animation
    let duration = 2 * 1000;
    let end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    await Swal.fire({
      title: "🎉 Order Placed!",
      html: `
        <p>Your order has been placed successfully!</p>
        <p><b>Order ID:</b> #${Date.now()}</p>
        <p><b>Total:</b> $${finalPrice.toFixed(2)}</p>
      `,
      icon: "success",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#4f46e5",
    });

    const order = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalAmount: finalPrice,
      appliedCoupon,
      userEmail,
    };

    dispatch(addOrder(order));
    dispatch(clearCart());

    const templateParams = {
      email: userEmail,
      order_id: Date.now(),
      orders: order.items.map((item) => ({
        name: item.name,
        price: item.price,
        units: item.quantity,
        image: `${window.location.origin}${item.image}`,
      })),
      cost: {
        shipping: shippingCost,
        tax,
        total: finalPrice.toFixed(2),
      },
    };

    emailjs
      .send("service_qb12zpt", "template_ypfklj7", templateParams, "TzsKmqGdXEDAnwvOI")
      .then(() => toast.success(`✅ Order confirmation sent to ${userEmail}`))
      .catch((err) => {
        toast.error("❌ Failed to send confirmation email");
        console.error("EmailJS Error:", err);
      });

    setUserEmail("");
  };

  const handlePurchase = async () => {
    if(!isAuthenticated){
      navigate("/signin");
      toast.info("Please sign in to proceed with the purchase.");
      return;
    }
    else{
    const confirmResult = await Swal.fire({
      title: "Confirm Purchase",
      html: `
        <p><b>Total:</b> $${finalPrice.toFixed(2)}</p>
        <p>Shipping: $${shippingCost.toFixed(2)} | Tax: $${tax.toFixed(2)}</p>
        <p>Select Payment Mode:</p>
      `,
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "QR Code",
      denyButtonText: "Card",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-success px-4 py-2",
        denyButton: "btn btn-primary px-4 py-2 me-2",
        cancelButton: "btn btn-secondary px-4 py-2 me-2",
      },
      buttonsStyling: false,

    });

    if (confirmResult.isConfirmed) {
      setShowQR(true);
    } else if (confirmResult.isDenied) {
      proceedOrder();
    }
  }
  };

  const upiLink = `upi://pay?pa=sairamadapa767195@ibl&pn=${encodeURIComponent(
    "My Awesome Store"
  )}&am=${finalPrice.toFixed(2)}&cu=INR`;

  return (
    <div className="container-fluid my-4">
      <div className="row g-4">
        {/* Left side: Orders */}
        <div className="col-lg-7">
          <h3 className="mb-3">
            🛍️ Your Orders
            <span className="text-muted fs-6">
              ({cartItems.length} items,{" "}
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} total)
            </span>
          </h3>

          <div className="d-flex flex-column gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="card shadow-sm cart-item-card p-3">
                <div className="row align-items-center">
                  <div className="col-md-6 d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="itemimage rounded me-3"
                    />
                    <div>
                      <h6 className="mb-2">{item.name}</h6>
                      <small className="text-muted d-block mb-1">
                        Quantity: {item.quantity}
                      </small>
                      <p className="mb-0 fw-bold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <button
                      onClick={() => dispatch(incrementQuantity(item))}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(decrementQuantity(item))}
                      className="btn btn-sm btn-outline-secondary me-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Summary & Payment */}
        <div className="col-lg-5">
          <div className="card shadow p-4 h-100">
            <h3 className="mb-3">💳 Payment & Summary</h3>

            <table className="table table-borderless mb-2">
              <tbody>
                <tr>
                  <td>Total Amount</td>
                  <td className="text-end">${totalAmount.toFixed(2)}</td>
                </tr>
                {buttonDiscount !== 0 && (
                  <tr className="text-success">
                    <td>Button Discount ({buttonDiscount}%)</td>
                    <td className="text-end">- ${discountAmount.toFixed(2)}</td>
                  </tr>
                )}
                {couponCodeResult.isValid && (
                  <tr className="text-success">
                    <td>
                      Coupon "{appliedCoupon}" (
                      {couponCodeResult.discountPercentage}%)
                    </td>
                    <td className="text-end">
                      - ${couponCodeResult.discountAmount.toFixed(2)}
                    </td>
                  </tr>
                )}
                <tr>
                  <td>Shipping</td>
                  <td className="text-end">${shippingCost.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax (5%)</td>
                  <td className="text-end">${tax.toFixed(2)}</td>
                </tr>
                <tr className="fw-bold border-top">
                  <td>Final Price</td>
                  <td className="text-end text-primary fs-4">
                    ${finalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Discount Buttons */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => applyButtonDiscount(10)}
                className="btn btn-outline-primary btn-sm"
              >
                10% Off
              </button>
              <button
                onClick={() => applyButtonDiscount(20)}
                className="btn btn-outline-primary btn-sm"
              >
                20% Off
              </button>
              <button
                onClick={() => applyButtonDiscount(30)}
                className="btn btn-outline-primary btn-sm"
              >
                30% Off
              </button>
              <button
                onClick={() => applyButtonDiscount(0)}
                className="btn btn-outline-dark btn-sm"
              >
                Remove Discount
              </button>
            </div>

            {/* Coupon Input */}
            <div className="d-flex mb-3">
              <input
                type="text"
                value={cuponCode}
                onChange={(e) => setCuponCode(e.target.value.toUpperCase())}
                placeholder="Enter coupon code"
                className={`form-control me-2 ${
                  errorMsg ? "is-invalid" : ""
                }`}
              />
              <button onClick={handleApplyCoupon} className="btn btn-success">
                Apply
              </button>
            </div>
            {errorMsg && (
              <div className="invalid-feedback d-block">{errorMsg}</div>
            )}

            {/* Email input */}
            <div className="mb-3 mt-3">
              <label htmlFor="userEmail" className="form-label fw-bold">
                Enter your Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>

            <button
              className="btn btn-md btn-primary w-100 mt-3"
              onClick={handlePurchase}
            >
              Proceed to Checkout
            </button>

            {/* QR Code Display */}
            {showQR && (
              <div className="text-center mt-4">
                <h5>Scan & Pay</h5>
                <QRCodeCanvas value={upiLink} size={200} includeMargin />
                <p className="mt-2">
                  Pay ₹{finalPrice.toFixed(2)} to My Awesome Store
                </p>
                <button
                  className="btn btn-success mt-2"
                  onClick={() => {
                    setShowQR(false);
                    proceedOrder();
                  }}
                >
                  I have paid
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
