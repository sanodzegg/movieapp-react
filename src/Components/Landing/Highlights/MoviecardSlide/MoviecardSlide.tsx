import React, {useEffect, forwardRef} from "react";
import Moviecard from "../Moviecard/Moviecard";

import "./MoviecardSlide.css"

interface dataTypes {
    data: objectTypes[]
}

interface objectTypes {
    genre_ids: object[],
    original_title: string,
    poster_path: string,
    title: string,
    vote_average: number,
}

export default function MoviecardSlide({data}:dataTypes) {

    useEffect(() => {
        data.map(e => {
            // console.log(e);
            
        })
    }, [])

  return <div className="slideWrapper">
    {data.map(e => {
        return <Moviecard imagePath={e.poster_path} vote={e.vote_average} title={e.original_title} genres={e.genre_ids} />
    })}
  </div>;
}
