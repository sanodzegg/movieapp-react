import React from "react";

import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchBarWrapper">
        <p>Looking for something else? Search for movies:</p>
        <input type="text" placeholder='Try "The Lord of the Rings"' />
    </div>
  );
}
