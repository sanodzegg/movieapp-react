import React, { useState } from "react";

import "./ReviewCard.css";

interface props {
    author: string,
    content: string,
    authorImg: string
}

export default function ReviewCard({ author, content, authorImg }:props) {

    const [displayFull, setDisplayFull] = useState(false);

    const handleDisplayFull = () => {
        setDisplayFull(true);
    }

  return (
    <div className="reviewCardWrapper">
        <div className="reviewCardIMGWrapper">
            <div className="imgCover"></div>
            <div className="textAreaBlur"></div>
            {authorImg ? <img src={`https://image.tmdb.org/t/p/original`+ authorImg} alt="author image" /> : <img src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80`} /> }
            <p className="authorName">{author}</p>
        </div>
        {content.length > 125 ? <p className="contentWrapper extendable" onClick={handleDisplayFull}>{displayFull ? content : `${content.slice(0, 150)}...`}</p> : <p className="contentWrapper">{content}</p>}
    </div>
  );
}
