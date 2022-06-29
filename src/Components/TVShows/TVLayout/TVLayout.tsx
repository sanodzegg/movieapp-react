import React, { useState, useEffect } from "react";

import "./TVLayout.css";
import { getTVShows } from '../../../getData';
import TVShowCard from "../TVShowCards/TVShowCard";

interface props {
    vote_average: number,
    backdrop_path: string,
    name: string,
    genre_ids: object[],
    id: number
}

export default function TVLayout({ layoutType }:any) {


    const index = localStorage.getItem("MovieReview-pagination-index");

    if(index === null) {
        localStorage.setItem("MovieReview-pagination-index", "1");
    }

    const [tvShowsData, setTVShowsData] = useState([]);
    const [pageIndex, setPageIndex] = useState(parseInt(index!));

    const setTVData = async (pageid:number) => {
        const data = await getTVShows(pageid);
        setTVShowsData(data.slice(0, 12));
    }

    const handlePagination = (type:string) => {
        if(type === "next") {
            localStorage.setItem("MovieReview-pagination-index", `${parseInt(index!) + 1}`);
            setPageIndex(prev => prev += 1);
        } else {
            localStorage.setItem("MovieReview-pagination-index", `${parseInt(index!) - 1}`);
            setPageIndex(prev => prev -= 1);
        }
    }

    useEffect(() => {
        setTVData(pageIndex);
    }, [pageIndex])

  return (
    <div className={`TVLayoutWrapper ${layoutType}`}>
        {tvShowsData.map((e:props, index:number) => {
            return (
                <TVShowCard key={index} vote={e.vote_average} imagePath={e.backdrop_path} title={e.name} genres={e.genre_ids} id={e.id} />
            )
        })}
        <div className="paginationBtns">
            {pageIndex > 1 ? <button onClick={() => handlePagination("prev")}>&lt; Prev</button> : null}
            {pageIndex <= 5 ? <button onClick={() => handlePagination("next")}>Next &gt;</button> : null}
        </div>
    </div>
  );
}