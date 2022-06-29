import { useState, useEffect } from "react";
import { getGenres } from "../getData";

interface objectTypes {
    id: number,
    name: string
}

const useGenres = ( genres:any[] | undefined ) => {

    const [transformedGenres, setTransformedGenres] = useState<string[]>([]);
    const [genreIDS, setGenreIDS] = useState<any>([]);

    const setGenreData = async () => {
        setGenreIDS(await getGenres());
    }

    useEffect(() => {
        setGenreData();
    }, []);

    useEffect(() => {
        const newGenres:string[] = []

        if (genreIDS.genres !== undefined && genres !== undefined) {
            genreIDS.genres.map((key:objectTypes) => {
                genres.filter((e:any) => {
                    return key.id === e ? newGenres.push(key.name) : null
                });
                setTransformedGenres(newGenres)
            });
        }
        
    }, [genreIDS])

  return transformedGenres;
};

export default useGenres;