import React, { useEffect, useState } from "react";

import "../DetailedMovieComps/DetailedMovieReviews/DetailedMovieReviews.css";
import { getShowReviews } from '../../../getData';
import DetailedShowReviewCard from './DetailedShowReviewCard';

type props = {
    showID: string
}

interface sendprops {
    author: string,
    content: string,
    created_at: string
}

export default function DetailedShowReviews({ showID }:props) {

    const [reviewData, setReviewData] = useState([]);

    const getData = async () => {
        setReviewData(await getShowReviews(showID));
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className="detailedMovieReviewsWrapper">
        {reviewData.length !== 0 ?
        <>
            <h1 className="reviewsHeader">Here are some of the reviews for the show</h1>
            {
            reviewData.map((e:sendprops, i:number) => {
                return <DetailedShowReviewCard key={i} author={e.author} content={e.content} created={e.created_at} />
            })
            }
        </>
        :
        <h1 className="reviewsHeader">No reviews found for the show :(</h1>}
    </div>
  );
}
