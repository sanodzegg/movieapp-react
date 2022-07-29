import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../../Components/Header/Header";

import "./DetailedMovie.css";
import Footer from '../../Components/Footer/Footer';
import Searchbar from '../../Components/Landing/Searchbar/Searchbar';
import { getMovieDetailed, getMovieTrailer } from '../../getData';


import DetailedMovieHero from './DetailedMovieComps/DetailedMovieHero/DetailedMovieHero';
import DetailedMovieQuote from "./DetailedMovieComps/DetailedMovieQuote/DetailedMovieQuote";
import DetailedMovieReviews from "./DetailedMovieComps/DetailedMovieReviews/DetailedMovieReviews";
import DetailedMovieVideo from "./DetailedMovieComps/DetailedMovieVideo/DetailedMovieVideo";

interface movieTypes {
  title: string,
  vote_average: number,
  genres: object[],
  release_date: string,
  overview: string,
  backdrop_path: string,
  tagline: string,
}

interface movieVideoResults {
  id: string,
  name: string,
  key: string
}

export default function DetailedMovie() {

  const [movieData, setMovieData] = useState<movieTypes>();
  const [movieVideos, setMovieVideos] = useState<movieVideoResults>();

  const params = useParams();

  const getCertainMovieData = async () => {
    if(params.id !== undefined) {
      setMovieData(await getMovieDetailed(params.id));
      setMovieVideos(await getMovieTrailer(params.id));
    }
  }

  useEffect(() => {
    getCertainMovieData();
  }, []);

  return (
    <div>
        <div className="detailedHeader">
          <Header />
        </div>
        {movieData !== undefined ? 
        <>
          <DetailedMovieHero title={movieData.title} vote={movieData.vote_average} genres={movieData.genres} date={movieData.release_date} overview={movieData.overview} backdrop={movieData.backdrop_path}/>
          {movieData.tagline !== "" && <DetailedMovieQuote quote={movieData.tagline}/>}
          {params.id !== undefined && <DetailedMovieReviews movieID={params.id} />}
          <hr className="reviewHr" />
          {movieVideos !== undefined && <DetailedMovieVideo type="movie" key={movieVideos.id} name={movieVideos.name} videokey={movieVideos.key} />}
        </>
        : <div>404</div>}
        <Searchbar />
        <Footer />
    </div>
  )
}