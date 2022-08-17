import React, { useEffect, useState } from "react";

import { ReactComponent as GenreIcon } from '../../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../../assets/icons/clock.svg';

import ErrImg from "../../../../assets/images/errors/detailed.png";

import "./DetailedMovieHero.css";
import moment from 'moment';


export default function DetailedMovieHero({ title, vote, genres, date, overview, backdrop }:any) {

    const [voteAvg, setVoteAvg] = useState(0);
    const [displayTitle, setDisplayTitle] = useState(false);
    const [displayOverview, setDisplayOverview] = useState(false);

    useEffect(() => {
        if(vote !== undefined) {
            setVoteAvg(Math.floor(vote / 2));
        }
    }, []);

    const movieHeroStyle = {
        "background" : `linear-gradient(180deg, rgba(8,27,39,0.9) 14%, rgba(8,27,39,1) 100%), url(https://image.tmdb.org/t/p/original${backdrop}) center no-repeat`,
        "backgroundSize" : "cover"
    }

    const handleTitle = (target:any) => {
        if(!displayTitle) {
            target.style.width = "625px";
            setDisplayTitle(true);
        } else {
            target.style.width = "325px";
            setDisplayTitle(false);
        }
    }

    return (
        <div className="detailedMovieHero" style={movieHeroStyle}>
            <div className="movieHeroWrapper">
                <span className="rating">{vote.toFixed(1)}</span>
                <div className="movieHeroIMGWrapper">
                    <img src={backdrop ? `https://image.tmdb.org/t/p/original`+ backdrop : ErrImg} alt="movie poster" />
                </div>
                <div className="movieAboutWrapper">
                    {title && title.length > 25 ? <h1 onClick={(e) => handleTitle(e.target)}>{displayTitle ? title : title.slice(0, 25) + "..."}</h1>
                    : <h1>{title}</h1>}
                    <div className="movieInfoWrapper">
                        <div id="ratingStars">
                            {
                                Array<number>(voteAvg).fill(0).map((e,i) => {
                                    return <p key={i}>⭐</p>
                                })
                            }
                        </div>
                        <div className="genreWrapper"><GenreIcon className="genreTag"/> {genres[0]?.name}</div>
                        <div className="dateWrapper"><DateIcon className="dateTag"/>{moment(date).format("LL")}</div>
                    </div>
                    {overview && overview.length > 250 ? <p onClick={() => setDisplayOverview(!displayOverview)}>{displayOverview ? overview : overview.slice(0, 250) + "..."}</p>
                    : <p>{overview}</p>}
                </div>
            </div>
        </div>
    )
}
