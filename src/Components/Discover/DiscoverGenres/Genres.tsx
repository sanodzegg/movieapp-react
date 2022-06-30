import React, {useEffect, useState} from "react";
import { getGenres } from '../../../getData';
import GenreCard from "./GenreCard";

import "./GenreCard.css";

interface types {
    genres: object[]
}

export default function Genres() {

    const [genres, setGenres] = useState<types>();

    const fetchGenres = async () => {
        setGenres(await getGenres())
    }

    useEffect(() => {
        fetchGenres();
    }, [])

  return (
        <div className="genresWrapper">
            {genres ? genres.genres?.map((e:any, i:number) => {
                return <GenreCard key={i} name={e.name} />
            }) : null}
        </div>
    );
}
