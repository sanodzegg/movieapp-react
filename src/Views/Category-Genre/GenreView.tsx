import React, {useEffect, useState} from "react";

import { useParams } from "react-router-dom";
import GenreMoviesHeader from "../../Components/ByGenre/ByGenreHeader/GenreMoviesHeader";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import TVAside from "../../Components/TVShows/TVAside/TVAside";
import { getWithGenre, getGenres } from '../../getData';

import "./GenreView.css";
import GenreWrapper from "../../Components/ByGenre/GenreMovieWrapper/GenreWrapper";

export default function GenreView() {

    const params = useParams();

    const [genreList, setGenreList] = useState<any>([]);
    const [genreId, setGenreId] = useState(0);
    const [dataFromGenre, setDataFromGenre] = useState([]);

    const getMoviesWithGenre = async () => {
        setGenreList(await getGenres());
        if(params.genre) {
            setDataFromGenre(await getWithGenre(genreId));
        }
    }

    useEffect(() => {
        getMoviesWithGenre();
    }, [genreId]);

    useEffect(() => {
        const genremap = genreList.genres;
        if(genremap !== undefined) {
            genremap.forEach((el:any) => {
                if(el.name === params.genre) {
                    setGenreId(el.id);
                }
            });
        }
    }, [genreList]);

  return (
    <div className="genreView">
        <div className="genreView-Col">
            <Header />
            <GenreMoviesHeader category={params.genre} />
            <GenreWrapper data={dataFromGenre} />
            <Footer />
        </div>
        <div className="genreView-Col aside">
            <TVAside />
        </div>
    </div>
  );
}
