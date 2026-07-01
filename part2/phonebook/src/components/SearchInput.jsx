import React from "react";

export default function SearchInput({ setFilterText }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}
