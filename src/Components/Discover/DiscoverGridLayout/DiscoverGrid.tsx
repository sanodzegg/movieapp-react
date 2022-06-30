import React, {useState, useEffect} from "react";
import { mixTVnMovie } from '../../../getData';
import DiscoverGridMovieCard from "./DiscoverGridMovieChild/DiscoverGridMovieCard";

import "./DiscoverGrid.css";
import DiscoverGridTVShowCard from "./DiscoverGridTVShowChild/DiscoverGridTVShowCard";
import Loader from '../../Landing/Loader/Loader';

interface movieDT {
    backdrop_path: string,
    title: string,
    vote_average: number,
    genre_ids: object[],
    id: number,
    poster_path: string
}

interface tvshowDT {
    backdrop_path: string,
    name: string,
    vote_average: number,
    genre_ids: object[],
    id: number,
    poster_path: string
}

export default function DiscoverGrid() {

    const [mixedData, setMixedData] = useState<string[]>([]);
    const [imgLoaded, setImgLoaded] = useState(false);

    const [moviesData, setMoviesData] = useState([]);
    const [tvShowsData, setTVShowsData] = useState([]);

    const getMixedData = async () => {
        setMixedData(await mixTVnMovie());
    }

    useEffect(() => {
        getMixedData();
    }, [])

    useEffect(() => {
        if(typeof mixedData[0] !== "string" && typeof mixedData[1] !== "string") {
            setMoviesData(mixedData[0]);
            setTVShowsData(mixedData[1]);
        }
    }, [mixedData]);


  return (
        <div className="discoverGridWrapper">
            {!imgLoaded ? <Loader /> : null}
            {moviesData?.map((e:movieDT, i:number) => {
                return <DiscoverGridMovieCard key={i} backdrop={e.backdrop_path} title={e.title} vote={e.vote_average} genres={e.genre_ids} id={e.id} index={i} setImgLoaded={setImgLoaded} poster={e.poster_path}/>
            })}
            {tvShowsData?.map((e:tvshowDT, i:number) => {
                return <DiscoverGridTVShowCard key={i} backdrop={e.backdrop_path} name={e.name} vote={e.vote_average} genres={e.genre_ids} id={e.id} index={i} setImgLoaded={setImgLoaded} poster={e.poster_path}/>
            })}
        </div>
    );
}
