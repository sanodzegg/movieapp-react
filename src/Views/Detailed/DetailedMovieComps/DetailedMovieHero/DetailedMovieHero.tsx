import React, { useEffect, useState } from "react";

import { ReactComponent as GenreIcon } from '../../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../../assets/icons/clock.svg';

import "./DetailedMovieHero.css";
import moment from 'moment';


export default function DetailedMovieHero({ title, vote, genres, date, overview, backdrop }:any) {

    const [voteAvg, setVoteAvg] = useState(0);

    useEffect(() => {
        if(vote !== undefined) {
            setVoteAvg(Math.floor(vote / 2));
        }
        
    }, []);

    const movieHeroStyle = {
        "background" : `linear-gradient(180deg, rgba(8,27,39,0.9) 14%, rgba(8,27,39,1) 100%), url(https://image.tmdb.org/t/p/original${backdrop}) center no-repeat`,
        "background-size" : "cover"
    }

    return (
        <div className="detailedMovieHero" style={movieHeroStyle}>
            <div className="movieHeroWrapper">
                <span className="rating">{vote.toFixed(1)}</span>
                <div className="movieHeroIMGWrapper">
                    <img src={`https://image.tmdb.org/t/p/original`+ backdrop} alt="movie poster" />
                </div>
                <div className="movieAboutWrapper">
                    <h1>{title}</h1>
                    <div className="movieInfoWrapper">
                        <div id="ratingStars">
                            {
                                Array<number>(voteAvg).fill(0).map((e,i) => {
                                    return <p key={i}>⭐</p>
                                })
                            }
                        </div>
                        <div className="genreWrapper"><GenreIcon className="genreTag"/> {genres[0].name}</div>
                        <div className="dateWrapper"><DateIcon className="dateTag"/>{moment(date).format("LL")}</div>
                    </div>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}
