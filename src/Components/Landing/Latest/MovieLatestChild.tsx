import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./MovieLatest.css";

import { ReactComponent as GenreIcon } from '../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../assets/icons/clock.svg';
import useGenres from '../../../hooks/useGenres';

import ErrImg from "../../../assets/images/errors/landingMain.png";

interface childTypes {
    movieid: number,
    idnum: number,
    title: string, 
    overview: string,
    genres: any[],
    releaseDate: string,
    backdrop: string,
    vote: number,
    imgLoaded: boolean,
    setImgLoaded: any,
}

export default function MovieLatestChild({ movieid, idnum, title, overview, genres, releaseDate, backdrop, vote, imgLoaded, setImgLoaded }:childTypes) {

    const genresStr = useGenres(genres);
    const imgRef = useRef<HTMLImageElement>(null);

    const navigate = useNavigate(); 

    const handleImgLoad = () => {
        setImgLoaded(true);
    }

    const handleImgError = () => {
        setImgLoaded(false);
        imgRef.current!.src = ErrImg;
    }

    const handleReadMore = (movieid:number) => {
        navigate(`/movie/detailed/${movieid}`);
    }

  return (
    <div className="latestGridChild" id={`grid${idnum}Child`}>
        <div className="gridChildBackground">
            <div className="imgCover" onClick={() => handleReadMore(movieid)}></div>
            <img onLoad={handleImgLoad} onError={handleImgError} ref={imgRef} src={backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : ErrImg} alt="movie backdrop" />
        </div>
        {imgLoaded ? 
            <div className="gridChildForeground">
                <span>{vote}</span>
                <h1>{title}</h1>
                <div className="movieInfoWrapper">
                    <div id="ratingStars">
                        {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
                            return <p key={i}>⭐</p>
                        })}
                    </div>
                    <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div>
                    <div className="dateWrapper"><DateIcon className="dateTag"/> {moment(releaseDate).format("LL")}</div>
                </div>
                <p>{overview}</p>
                <button id={`btn${idnum}`} onClick={() => handleReadMore(movieid)}>read more</button>
            </div>
        : null
        }
    </div>
  );
}
