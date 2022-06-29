import React from "react";
import { useNavigate } from "react-router-dom";

import "./NewestChildren.css";

import { ReactComponent as GenreIcon } from "../../../assets/icons/genretag.svg";
import useGenres from '../../../hooks/useGenres';

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

    const handleReadMore = (movieid:number) => {
        navigate(`/movie/detailed/${movieid}`);
    }

  return (
    <div className="newestRelChild" id={`gridChild${index}`}>
        <span>{vote}</span>
        <div className="movieCardIMGWrapper" onClick={() => handleReadMore(id)}>
            <div className="imgCover"></div>
            <img src={`http://image.tmdb.org/t/p/original${backdrop}`} alt="backdrop image"/>
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
