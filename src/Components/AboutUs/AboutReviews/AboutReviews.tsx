import React, { useState, useEffect } from "react";
import { getMovieReviews } from '../../../getData';
import ReviewCard from "./ReviewCards/ReviewCard";

import "./AboutReviews.css";

interface reviewDataTypes {
    author: string,
    content: string,
    author_details: authorDetails,
}

interface authorDetails {
    avatar_path: string
}

export default function AboutReviews() {

    const [reviewData, setReviewData] = useState([]);

    const getReviewData = async () => {
        setReviewData(await getMovieReviews("240"));
    }

    useEffect(() => {
        getReviewData();
    }, []);

  return (
    <div className="aboutReviewsWrapper">
        {reviewData.map((e:reviewDataTypes, i:number) => {
            return <ReviewCard key={i} author={e.author} content={e.content} authorImg={e.author_details.avatar_path} />
        })}
    </div>
  );
}
