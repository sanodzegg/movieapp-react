import React, { useState, useEffect, useRef } from "react";
import { getGenres } from '../../../getData';
import moment from "moment";
import "./MovieLatest.css";

import { ReactComponent as GenreIcon } from '../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../assets/icons/clock.svg';

interface childTypes {
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

export default function MovieLatestChild({ idnum, title, overview, genres, releaseDate, backdrop, vote, imgLoaded, setImgLoaded }:childTypes) {

    const [genreIDS, setGenreIDS] = useState<any>([]);
    const [genresStr, setGenresStr] = useState<any>([]);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleImgLoad = () => {
        setImgLoaded(true);
    }

    const handleImgError = () => {
        setImgLoaded(false);
        
        imgRef.current!.style.display = "none";
    }

    useEffect(() => {
        setGenreData();
    }, []);

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

  return (
    <div className="latestGridChild" id={`grid${idnum}Child`}>
        <div className="gridChildBackground">
            <div className="imgCover"></div>
            <img onLoad={handleImgLoad} onError={handleImgError} ref={imgRef} src={`https://image.tmdb.org/t/p/original`+backdrop} alt="movie backdrop" />
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
                    <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr}</div>
                    <div className="dateWrapper"><DateIcon className="dateTag"/> {moment(releaseDate).format("LL")}</div>
                </div>
                <p>{overview}</p>
                <button>read more</button>
            </div>
        : null
        }
    </div>
  );
}
