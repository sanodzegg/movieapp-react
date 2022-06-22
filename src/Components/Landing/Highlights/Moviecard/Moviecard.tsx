import React, {useState, useEffect} from "react";

import { ReactComponent as GenreIcon } from "../../../../assets/icons/genretag.svg";
import "./Moviecard.css";
import { getGenres } from '../../../../getData';

interface dataTypes {
  imagePath: string,
  vote: number,
  title: string,
  genres: object[]
}


export default function Moviecard({imagePath, vote, title, genres}:dataTypes) {

  const [genreIDS, setGenreIDS] = useState<any>([]);
  const [genresStr, setGenresStr] = useState<any>([]);

  useEffect(() => {
    if(genreIDS.genres !== undefined) {
        genreIDS.genres.map((key:any, i:number) => {
           return genres.filter((e:any) => genres.includes(key.id) ? setGenresStr(key.name) : null)
        });
    }
  }, [genreIDS, genres]);

  const setGenreData = async () => {
      setGenreIDS(await getGenres());
  }

  useEffect(() => {
    setGenreData();
  }, []);

  return <div className="movieCardWrapper">
    <div className="movieCardIMGWrapper">
      <img src={`http://image.tmdb.org/t/p/w342${imagePath}`} alt="backdrop image"/>
    </div>
    <div className="cardWrapperInfo">
      <div id="ratingStars">
        {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
            return <p key={i}>⭐</p>
        })}
      </div>
      <h3 className="cardWrapperTitle">{title.length >= 21 ? `${title.slice(0, 18)}...` : title}</h3>
      <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr}</div>
    </div>
  </div>;
}
