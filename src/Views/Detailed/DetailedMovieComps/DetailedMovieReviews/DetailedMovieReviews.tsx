import { useEffect, useState } from "react";

import "./DetailedMovieReviews.css";
import { getMovieReviews } from '../../../../getData';
import DetailedMovieReviewCard from "./DetailedMovieReviewCard/DetailedMovieReviewCard";

type props = {
    movieID: string
}

interface sendprops {
    author: string,
    content: string,
    created_at: string
}

export default function DetailedMovieReviews({ movieID }:props) {

    const [reviewData, setReviewData] = useState([]);

    const getData = async () => {
        setReviewData(await getMovieReviews(movieID));
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className="detailedMovieReviewsWrapper">
        {reviewData.length !== 0 ?
        <>
            <h1 className="reviewsHeader">Here are some of the reviews for the movie</h1>
            {
            reviewData.map((e:sendprops, i:number) => {
                return <DetailedMovieReviewCard key={i} author={e.author} content={e.content} created={e.created_at} />
            })
            }
        </>
        :
        <h1 className="reviewsHeader">No reviews found for the movie :(</h1>}
    </div>
  );
}
