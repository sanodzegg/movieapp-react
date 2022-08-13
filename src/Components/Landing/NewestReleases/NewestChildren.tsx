import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./NewestChildren.css";

import { ReactComponent as GenreIcon } from "../../../assets/icons/genretag.svg";
import useGenres from '../../../hooks/useGenres';

import ErrImg from "../../../assets/images/errors/newReleasesMain.png";

interface newestChildrenTypes {
    vote: number,
    backdrop: string,
    title: string,
    id: number,
    genres: object[],
    index: number,
}

export default function NewestChildren({ vote, backdrop, title, id, genres, index }:newestChildrenTypes) {

    const genresStr = useGenres(genres);
    const navigate = useNavigate(); 

    const errRef = useRef<HTMLImageElement>(null);

    const handleReadMore = (movieid:number) => {
        navigate(`/movie/detailed/${movieid}`);
    }

    const handleError = () => {
        errRef.current!.src = ErrImg;
    }

  return (
    <div className="newestRelChild" id={`gridChild${index}`}>
        <span>{vote}</span>
        <div className="movieCardIMGWrapper" onClick={() => handleReadMore(id)}>
            <div className="imgCover"></div>
            <img onError={handleError} ref={errRef} src={backdrop ? `http://image.tmdb.org/t/p/original${backdrop}` : ErrImg} alt="backdrop image"/>
        </div>
        <div className="cardWrapperInfo">
        <div id="ratingStars">
            {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
                return <p key={i}>⭐</p>
            })}
        </div>
        <h3 className="cardWrapperTitle" onClick={() => handleReadMore(id)}>{title.length >= 21 ? `${title.slice(0, 21)}...` : title}</h3>
        <div className="genreWrapper" onClick={() => handleReadMore(id)}><GenreIcon className="genreTag"/> {genresStr[0]}</div>
        </div>
    </div>
  )
}
