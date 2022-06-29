import React, { useEffect, useState } from "react";
import { getTVShows } from '../../../../getData';
import { getRandom } from '../../../../helpers';
import SpotlightCard from "./SpotlightCards/SpotlightCard";

interface childProps {
    backdrop_path: string,
    id: number,
    name: string,
    vote_average: number,
    genre_ids: object[]
}

export default function TVAsideSpotlight() {

    const [spotlightData, setSpotlightData] = useState<childProps[]>([]);

    const randomPageID = getRandom(30);

    const getSpotlightData = async () => {
        const data = await getTVShows(randomPageID);
        setSpotlightData(data.slice(0,4));
    }

    useEffect(() => {
        getSpotlightData();
    }, [])

    useEffect(() => {
        console.log(spotlightData);
        
    }, [spotlightData])

  return (
    <div className="tvAsideSpotlightWrapper">
        <p>In Spotlight today:</p>
        {spotlightData.map((e:any, i:number) => {
            return <SpotlightCard backdrop={e.backdrop_path} id={e.id} name={e.name} vote={e.vote_average} genres={e.genre_ids} key={i}/>
        })}
    </div>
  );
}