import React, {useEffect, useState, useRef} from "react";

import { ReactComponent as GenreIcon } from '../../../assets/icons/genretag.svg';

import "./TVShowCard.css";
import useGenres from '../../../hooks/useGenres';
import { useNavigate } from 'react-router-dom';
import Loader from "../../Landing/Loader/Loader";

import ErrImg from "../../../assets/images/errors/tvShows.png";

interface tvShowCardTypes {
  vote: number,
  imagePath: string,
  title: string,
  genres: object[],
  id: number,
  imgLoaded: any,
  setImgLoaded: any
}

export default function TVShowCard({ vote, imagePath, title, genres, id, imgLoaded, setImgLoaded }:tvShowCardTypes) {

  const genresStr = useGenres(genres);
  const errRef = useRef<HTMLImageElement>(null);

  const navigate = useNavigate();

  const handleNavigate = (id:number) => {
    navigate(`/tvshows/detailed/${id}`);
  }

  const handleImgLoad = () => {
    setImgLoaded(true);
  }

  const handleImgError = () => {
    errRef.current!.src = ErrImg;
    
    setImgLoaded(true);
  }

  return (
    <div className="tvShowCardWrapper">
      <span>{vote > 0 ? vote : "?"}</span>
      <div className="movieCardIMGWrapper" onClick={() => handleNavigate(id)}>
        {!imgLoaded && <Loader />}
        <div className="imgCover"></div>
        <img onError={handleImgError} ref={errRef} onLoad={handleImgLoad} src={imagePath ? `http://image.tmdb.org/t/p/original${imagePath}` : ErrImg} alt="backdrop image"/>
      </div>
      <div className="cardWrapperInfo">
        <div id="ratingStars">
          {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
              return <p key={i}>⭐</p>
          })}
        </div>
        <h3 className="cardWrapperTitle" onClick={() => handleNavigate(id)}>{title.length >= 21 ? `${title.slice(0, 21)}...` : title}</h3>
        {genresStr.length > 0 ? <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div> : null}
      </div>
      <button className="rmBtn" onClick={() => handleNavigate(id)}>Read More</button>
    </div>
  );
}
