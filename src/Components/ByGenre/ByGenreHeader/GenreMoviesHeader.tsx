import React from "react";

import "./GenreMoviesHeader.css"

export default function GenreMoviesHeader({category}:any) {
  return (
    <div className="genreMoviesHeader">
        <h1>{category}</h1>
        <p>Movies filtered by: {category}</p>
    </div>
  );
}
