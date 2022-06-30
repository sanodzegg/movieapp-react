import React from "react";
import "../DiscoverGridMovieChild/DiscoverGridMovieCard.css";
import {ReactComponent as GenreIcon} from "../../../../assets/icons/genretag.svg";
import useGenres from '../../../../hooks/useGenres';
import { useNavigate } from 'react-router-dom';

interface props {
    backdrop: string,
    name: string,
    vote: number,
    genres: object[],
    id: number,
    index: number,
    setImgLoaded: any,
    poster: string,
}


export default function DiscoverGridTVShowCard({ backdrop, name, vote, genres, id, index, setImgLoaded, poster }:props) {

    const genresStr = useGenres(genres);


    const navigate = useNavigate();

    const handleNavigation = (tvshowid:number) => {
        navigate(`/tvshows/detailed/${tvshowid}`);
    }

    const handleImgLoad = () => {
        setImgLoaded(true)
    }

  return (
    <div className="discoverGridMovieCardWrapper" id={`discoverGridTV${index}Child`} onClick={() => handleNavigation(id)}>
        <span className="discoverScore">{vote}</span>
        <div className="discoverMovieCardBack">
            <div className="imgCover"></div>
            <img onLoad={handleImgLoad} src={backdrop ? `http://image.tmdb.org/t/p/original${backdrop}` : `http://image.tmdb.org/t/p/original${poster}`} alt="discover tvShow poster" />
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
            <p className="discoverTitle">{name}</p>
        </div>
    </div>
  );
}
