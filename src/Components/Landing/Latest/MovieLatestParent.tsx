import React, { useState, useEffect } from "react";
import axios from "axios";

import { getRandom } from '../../../helpers';
import MovieLatestChild from "./MovieLatestChild";
import Loader from "../Loader/Loader";

import "./MovieLatest.css";


export default function MovieLatest() {

    const [imgLoaded, setImgLoaded] = useState(false);
    const [displayData, setDisplayData] = useState<any[]>([]);

    const getData = async () => {
        const spliceIndex = getRandom(15);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const data = await res.data.results;
        const displayOnLanding = data.slice(spliceIndex, spliceIndex+4);
        setDisplayData(displayOnLanding);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="latestGrid">
            {!imgLoaded ? <Loader /> : null}
            {displayData ? (
                displayData.map((e, i) => <MovieLatestChild movieid={e.id} idnum={i} key={i} title={e.title} overview={e.overview} genres={e.genre_ids} releaseDate={e.release_date} backdrop={e.backdrop_path} vote={e.vote_average} imgLoaded={imgLoaded} setImgLoaded={setImgLoaded}/>)
            ) : null}
        </div>
    );
}
