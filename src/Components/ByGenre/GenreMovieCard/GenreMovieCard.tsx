import React, {useState, useRef} from "react";

import {ReactComponent as GenreIcon} from "../../../assets/icons/genretag.svg";

import "./GenreMovieCard.css";
import { useNavigate } from 'react-router-dom';
import useGenres from '../../../hooks/useGenres';
import Loader from "../../Landing/Loader/Loader";

import ErrImg from "../../../assets/images/errors/tvShows.png";

interface props {
    vote: number,
    imagePath: string,
    title: string,
    genres: object[],
    id: number
}

export default function GenreMovieCard({vote, imagePath, title, genres, id}:props) {

    const navigate = useNavigate();
    const genresStr = useGenres(genres);
    
    const [imgLoaded, setImgLoaded] = useState(false);

    const errRef = useRef<HTMLImageElement>(null);

    const handleIMGError = () => {
        errRef.current!.src = ErrImg
        
        setImgLoaded(true);
    }

    const handleIMGLoad = () => {
        setImgLoaded(true);
    }

    const handleReadMore = (movieid:number) => {
        navigate(`/movie/detailed/${movieid}`);
    }

  return (
    <div className="genreMovieCardWrapper">
      <span>{vote > 0 ? vote : "?"}</span>
      <div className="movieCardIMGWrapper" onClick={() => handleReadMore(id)}>
        {!imgLoaded ? <Loader /> : null}
        <div className="imgCover"></div>
        <img onError={handleIMGError} onLoad={handleIMGLoad} ref={errRef} src={imagePath ? `http://image.tmdb.org/t/p/w780${imagePath}` : ErrImg} alt="backdrop image"/>
      </div>
      <div className="cardWrapperInfo">
        <div id="ratingStars">
          {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
              return <p key={i}>⭐</p>
          })}
        </div>
        <h3 className="cardWrapperTitle" onClick={() => handleReadMore(id)}>{title.length >= 21 ? `${title.slice(0, 21)}...` : title}</h3>
        <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div>
      </div>
    </div>
  );
}
