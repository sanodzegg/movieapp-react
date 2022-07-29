import React, {useState} from "react";

import "../DetailedMovieComps/DetailedMovieReviews/DetailedMovieReviewCard/DetailedMovieReviewCard.css";
import moment from 'moment';

interface props {
    author: string,
    content: string,
    created: string
}

export default function DetailedShowReviewCard({ author, content, created }:props) {

  const [displayFull, setDisplayFull] = useState(false);

  const handleContentDisplay = () => {
    !displayFull ? setDisplayFull(true) : setDisplayFull(false);
  }

  return (
    <div className="detailedMovieReviewCardWrapper">
      {content.length > 300 ? <p onClick={handleContentDisplay}>{!displayFull ? content.slice(0, 300) : content}...</p> : <p>{content}</p>}
        <div className="reviewInfo">
            <span>{author}</span>
            <span>{moment(created).format("LL")}</span>
        </div>
    </div>
  );
}
