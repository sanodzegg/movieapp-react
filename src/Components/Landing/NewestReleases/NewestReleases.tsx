import React, {useState, useEffect} from "react";

import "./NewestReleases.css"
import { getRandom } from '../../../helpers';
import { UpcomingList } from '../../../getData';
import NewestChildren from "./NewestChildren";

export default function NewestReleases() {

  const [newestData, setNewestData] = useState([]);
  const sliceIndex = getRandom(15);

  const setNRData = async () => {
    const dataToParse = await UpcomingList();
    setNewestData(dataToParse.slice(sliceIndex, sliceIndex + 5))

  }

  useEffect(() => {
      setNRData();
  }, []);

  return <div className="newestRelWrapper">
    <h1>New Releases</h1>
    <p>The most recent movies released.</p>

    <div className="newestRelGrid">
      {newestData.map((e:any, i:number) => {
        return (
          <NewestChildren key={i} vote={e.vote_average} backdrop={e.backdrop_path} title={e.title} id={e.id} genres={e.genre_ids} index={i}/>
        )
      })}
    </div>
  </div>;
}
