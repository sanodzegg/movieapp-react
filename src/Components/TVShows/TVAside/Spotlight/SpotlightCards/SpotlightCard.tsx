import React, { useState, useRef } from "react";
import useGenres from '../../../../../hooks/useGenres';

import {ReactComponent as GenreIcon} from "../../../../../assets/icons/genretag.svg"
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../Landing/Loader/Loader';

interface props {
    backdrop: string,
    id: number,
    name: string,
    vote: number,
    genres: object[]
}

export default function SpotlightCard({ backdrop, id, name, vote, genres }:props) {

    const [imgLoaded, setImgLoaded] = useState(false);
    const errRef = useRef<HTMLImageElement>(null);

    const genresStr = useGenres(genres);

    const navigate = useNavigate();

    const handleNavigate = (movieid:number) => {
        navigate(`/tvshows/${movieid}`);
    }

    const handleLoad = () => {
        setImgLoaded(true);
    }

    const handleIMGErr = () => {
        errRef.current!.src = "https://mediawebben.se/assets/img/error/img.png";
    
        setImgLoaded(true);
    }

  return (
    <div className="spotlightCardWrapper">
      <span>{vote > 0 ? vote : "?"}</span>
      <div className="movieCardIMGWrapper" onClick={() => handleNavigate(id)}>
        {!imgLoaded ? <Loader /> : null}
        <div className="imgCover"></div>
        <img onError={handleIMGErr} ref={errRef} onLoad={handleLoad} src={`http://image.tmdb.org/t/p/original${backdrop}`} alt="backdrop image"/>
      </div>
      <div className="cardWrapperInfo">
        <div id="ratingStars">
          {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
              return <p key={i}>⭐</p>
          })}
        </div>
        <h3 className="cardWrapperTitle" onClick={() => handleNavigate(id)}>{name.length >= 17 ? `${name.slice(0, 17)}...` : name}</h3>
        {genresStr.length > 0 ? <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div> : null}
      </div>
    </div>
    );
}
