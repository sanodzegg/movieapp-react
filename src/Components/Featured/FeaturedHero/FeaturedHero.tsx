import "./FeaturedHero.css";

import { ReactComponent as GenreIcon } from '../../../assets/icons/genretag.svg';
import { ReactComponent as DateIcon } from '../../../assets/icons/clock.svg';
import useGenres from '../../../hooks/useGenres';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

interface props {
    title: string,
    image: string,
    vote: number,
    genres: number[],
    releaseDate: string,
    movieID: number,
    setLoaded: any
}

function FeaturedHero({ image, title, vote, genres, releaseDate, movieID, setLoaded }:props) {

    const genresStr = useGenres(genres);

    const navigate = useNavigate();

    const handleReadMore = () => {
        if(movieID) {
            navigate(`/movie/detailed/${movieID}`);
        }
    }

    const handleLoad = () => {
        setLoaded(true);
    }

  return (
    <div className="featuredHeroWrapper">
        <div className="featuredHeroIMGCover"></div>
        <img src={`https://image.tmdb.org/t/p/original${image}`} onLoad={handleLoad} className="featuredHeroIMG" />
        <div className="featuredHeroInfo">
            <span className="heroRating">{vote}</span>
            <h1>{title}</h1>
            <div className="movieInfoWrapper">
                    <div id="ratingStars">
                        {Array<number>(Math.floor(vote/2)).fill(0).map((e,i) => {
                            return <p key={i}>⭐</p>
                        })}
                    </div>
                    <div className="genreWrapper"><GenreIcon className="genreTag"/> {genresStr[0]}</div>
                    <div className="dateWrapper"><DateIcon className="dateTag"/> {moment(releaseDate).format("LL")}</div>
            </div>
            <button className="rmBtn" onClick={handleReadMore}>Read More</button>
        </div>
    </div>
  );
}

export const HeroComp = FeaturedHero;