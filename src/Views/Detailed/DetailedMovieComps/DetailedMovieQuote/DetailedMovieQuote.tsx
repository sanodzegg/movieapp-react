import React from "react";

import "./DetailedMovieQuote.css";

type props = {
    quote: string
}

export default function DetailedMovieQuote({ quote }:props ) {
  return (
    <div className="quoteWrapper">
        <p>{ `"${quote}"` }</p>
    </div>
  );
}
