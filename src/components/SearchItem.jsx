import React from "react";
import "./SearchItem.css";

function SearchItem({ search, setSearch }) {
  return (
    <form>
      <input
        className="search_input"
        id="search"
        type="text"
        placeholder="Search..."
        onSubmit={(e) => e.preventDefault()}
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
export default SearchItem;
