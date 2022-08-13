import React, {useState, useEffect} from "react";

import "./Upcoming.css";
import axios from 'axios';
import { getRandom } from '../../../helpers';

import { useNavigate } from "react-router-dom";
import moment from "moment";

import { ReactComponent as GenreIcon } from '../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../assets/icons/clock.svg';
import useGenres from '../../../hooks/useGenres';
import { UpcomingList } from '../../../getData';

import ErrImg from "../../../assets/images/errors/upcoming.png";

interface movieDataTypes {
    backdrop_path?: string | undefined,
    genre_ids: any[],
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
}

export default function Upcoming() {

    const [movieData, setMovieData] = useState<movieDataTypes>();
    const genresStr = useGenres(movieData?.genre_ids)
    const randomMovie = getRandom(20)

    const [voteAvg, setVoteAvg] = useState(0);

    const setUpcoming = async () => {
        const dataToParse = await UpcomingList();
        setMovieData(dataToParse[randomMovie]);
    }
    
    const navigate = useNavigate(); 

    useEffect(() => {
        setUpcoming();
    }, []);

    useEffect(() => {
        if(movieData?.vote_average !== undefined) {
            setVoteAvg(Math.floor(movieData?.vote_average! / 2));
        }
    }, [movieData])

    const handleReadMore = (movieid:number | undefined) => {
        navigate(`/movie/detailed/${movieid}`);
    }

    return (
        <div className="upcomingWrapper">
            <div className="upcomingBackground">
                <div className="upcomingIMGCover"></div>
                <div className="upcomingIMGWrapper">
                    {movieData?.backdrop_path ? 
                    <img src={`https://image.tmdb.org/t/p/original`+movieData?.backdrop_path} alt="upcoming movie image" /> :
                    !movieData?.backdrop_path && movieData?.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/original`+movieData?.poster_path} alt="upcoming movie image" /> : 
                    <img src={ErrImg} alt="upcoming movie image"/> }
                </div>
            </div>
            <div className="upcomingForeground">
                <span>{movieData?.vote_average}</span>
                <h1>{movieData?.title}</h1>
                <div className="movieInfoWrapper">
                    <div id="ratingStars">
                        {Array<number>(voteAvg).fill(0).map((e,i) => {
                            return <p key={i}>⭐</p>
                        })}
                    </div>
                    <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div>
                    <div className="dateWrapper"><DateIcon className="dateTag"/> {moment(movieData?.release_date).format("LL")}</div>
                </div>
                <p>{movieData?.overview}</p>
                <button onClick={() => handleReadMore(movieData?.id)}>read more</button>
            </div>
        </div>
    )
}
