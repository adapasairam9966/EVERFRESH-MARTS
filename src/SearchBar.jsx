import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery); // send search query to parent
      setSearchQuery("");     // reset input after search
    }
  };

  return (
    <form className="d-flex mx-3 flex-grow-1" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-warning" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
