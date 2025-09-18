import React, { useState } from "react";
import { useSelector } from "react-redux";
import VegCard from "./VegCard";
import "./pagination.css"; // 👈 import the custom pagination styles

function Milk() {
  const milkItems = useSelector((state) => state.products.milkItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const itemsPerPage = 8;

  // Price ranges
  const priceRanges = [
    { id: "0-50", label: "₹0 – ₹50", min: 0, max: 50 },
    { id: "50-200", label: "₹51 – ₹200", min: 51, max: 200 },
    { id: "200-400", label: "₹201 – ₹400", min: 201, max: 400 },
  ];

  // Handle checkbox toggle
  const handleCheckboxChange = (rangeId) => {
    setSelectedRanges((prev) =>
      prev.includes(rangeId)
        ? prev.filter((id) => id !== rangeId)
        : [...prev, rangeId]
    );
    setCurrentPage(1);
  };

  // Filtered items
  const filteredItems =
    selectedRanges.length > 0
      ? milkItems.filter((item) =>
          selectedRanges.some((rangeId) => {
            const range = priceRanges.find((r) => r.id === rangeId);
            return item.price >= range.min && item.price <= range.max;
          })
        )
      : milkItems;

  // Pagination calculation
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  // Generate page numbers with ellipsis (...)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Show at most 5 pages

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center text-primary fw-bold">Milk 🥛</h2>

      {/* Filter Section */}
      <div className="mb-4">
        <h5 className="fw-semibold">Filter by Price:</h5>
        <div className="d-flex gap-4 flex-wrap">
          {priceRanges.map((range) => (
            <div key={range.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={range.id}
                checked={selectedRanges.includes(range.id)}
                onChange={() => handleCheckboxChange(range.id)}
              />
              <label className="form-check-label" htmlFor={range.id}>
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Milk Cards */}
      <div className="row g-4 mb-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => <VegCard key={item.id} item={item} />)
        ) : (
          <p className="text-center text-muted">
            No milk items found in this price range.
          </p>
        )}
      </div>

      {/* Custom Pagination */}
      {totalPages > 1 && (
        <div className="content_detail__pagination cdp" actpage={currentPage}>
          <button
            className="cdp_i"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            prev
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="cdp_i dots">...</span>
            ) : (
              <button
                key={index}
                className={`cdp_i ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className="cdp_i"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default Milk;
