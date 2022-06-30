import React, {useEffect, forwardRef} from "react";
import Moviecard from "../Moviecard/Moviecard";

import "./MoviecardSlide.css"

interface dataTypes {
    data: objectTypes[]
}

interface objectTypes {
    genre_ids: object[],
    poster_path: string,
    title: string,
    vote_average: number,
    id: number,
}

export default function MoviecardSlide({data}:dataTypes) {

  return <div className="slideWrapper">
    {data.map((e, i) => {
        return <Moviecard id={e.id} key={i} imagePath={e.poster_path} vote={e.vote_average} title={e.title} genres={e.genre_ids} />
    })}
  </div>;
}
