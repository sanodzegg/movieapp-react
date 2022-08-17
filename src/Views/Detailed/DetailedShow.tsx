import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Landing/Searchbar/Searchbar";

import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import { getShowDetailed, getShowTrailer } from '../../getData';
import DetailedMovieQuote from "./DetailedMovieComps/DetailedMovieQuote/DetailedMovieQuote";
import DetailedMovieHero from "./DetailedMovieComps/DetailedMovieHero/DetailedMovieHero";
import DetailedShowReviews from './DetailedShowComps/DetailedShowReviews';
import DetailedMovieVideo from './DetailedMovieComps/DetailedMovieVideo/DetailedMovieVideo';

interface showTypes {
  name: string,
  vote_average: number,
  genres: object[],
  release_date: string,
  overview: string,
  backdrop_path: string,
  tagline: string,
}

interface showVideoResults {
  id: string,
  name: string,
  key: string
}

export default function DetailedShow() {

  const [showData, setShowData] = useState<showTypes>();
  const [showVideos, setShowVideos] = useState<showVideoResults>();

  const params = useParams();

  const getCertainShowData = async () => {
    if(params.id !== undefined) {
      setShowData(await getShowDetailed(params.id));
      setShowVideos(await getShowTrailer(params.id));
    }
  }

  useEffect(() => {
    getCertainShowData();
  }, []);

  return (
    <div>
        <div className="detailedHeader">
          <Header />
        </div>
        {showData !== undefined ? 
        <>
          <DetailedMovieHero title={showData.name} vote={showData.vote_average} genres={showData.genres} date={showData.release_date} overview={showData.overview} backdrop={showData.backdrop_path}/>
          {showData.tagline !== "" && <DetailedMovieQuote quote={showData.tagline}/>}
          {params.id !== undefined && <DetailedShowReviews showID={params.id} />}
          <hr className="reviewHr" />
          {showVideos !== undefined && <DetailedMovieVideo type={"show"} key={showVideos.id} name={showVideos.name} videokey={showVideos.key} />}
        </>
        : <div>404</div>}
        <Searchbar />
        <Footer />
    </div>
  )
}