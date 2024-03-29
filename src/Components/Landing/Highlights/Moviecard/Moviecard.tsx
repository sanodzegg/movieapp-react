import { useRef } from "react";

import { ReactComponent as GenreIcon } from "../../../../assets/icons/genretag.svg";
import "./Moviecard.css";
import useGenres from '../../../../hooks/useGenres';
import { useNavigate } from 'react-router-dom';

import ErrImg from "../../../../assets/images/errors/tvShows.png";

interface dataTypes {
  imagePath: string,
  vote: number,
  title: string,
  genres: any[],
  id:number
}

export default function Moviecard({ imagePath, vote, title, genres, id }:dataTypes) {

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
    <div className="movieCardWrapper">
      <span>{vote > 0 ? vote : "?"}</span>
      <div className="movieCardIMGWrapper" onClick={() => handleReadMore(id)}>
        <div className="imgCover"></div>
        <img ref={errRef} onError={handleError} src={imagePath ? `http://image.tmdb.org/t/p/w780${imagePath}` : ErrImg} alt="backdrop image"/>
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
