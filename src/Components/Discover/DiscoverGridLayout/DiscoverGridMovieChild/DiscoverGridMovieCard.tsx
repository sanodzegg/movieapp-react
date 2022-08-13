import React, {useRef} from "react";
import "./DiscoverGridMovieCard.css";
import {ReactComponent as GenreIcon} from "../../../../assets/icons/genretag.svg";
import useGenres from '../../../../hooks/useGenres';
import { useNavigate } from 'react-router-dom';

import ErrImg from "../../../../assets/images/errors/landingMain.png";

interface props {
    backdrop: string,
    title: string,
    vote: number,
    genres: object[],
    id: number,
    index: number,
    setImgLoaded: any,
    poster: string,
}


export default function DiscoverGridMovieCard({ backdrop, title, vote, genres, id, index, setImgLoaded, poster }:props) {

    const genresStr = useGenres(genres);

    const errRef = useRef<HTMLImageElement>(null);
    
    const navigate = useNavigate();

    const handleNavigation = (movieid:number) => {
        navigate(`/movie/detailed/${movieid}`);
    }

    const handleIMGError = () => {
        errRef.current!.src = ErrImg;
        
        setImgLoaded(true);
    }

    const handleImgLoad = () => {
        setImgLoaded(true)
    }

  return (
    <div className="discoverGridMovieCardWrapper" id={`discoverGrid${index}Child`} onClick={() => handleNavigation(id)}>
        <span className="discoverScore">{vote}</span>
        <div className="discoverMovieCardBack">
            <div className="imgCover"></div>
            <img onError={handleIMGError} ref={errRef} onLoad={handleImgLoad} src={backdrop ? `http://image.tmdb.org/t/p/original${backdrop}` : !backdrop && poster? `http://image.tmdb.org/t/p/original${poster}` : ErrImg} alt="discover movie poster" />
        </div>
        <div className="discoverMovieCardFore">
            <div className="discoverMovieInfo">
                <div className="discoverRatingStars">                
                    {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
                        return <p key={i}>⭐</p>
                    })}
                </div>
                <div className="discoverGenreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div>
            </div>
            <p className="discoverTitle">{title}</p>
        </div>
    </div>
  );
}
