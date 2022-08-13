import "./SearchedCard.css";
import { useNavigate } from 'react-router-dom';

import ErrImg from "../../../assets/images/errors/search.png";

interface dataTypes {
    backdrop_path: string,
    id: number,
    poster_path: string,
    title: string,
    overview: string
}

export default function SearchedCard({ data, type }:any) {
    
    const navigate = useNavigate();
    
    const handleResultClick = (id:number) => {
        navigate(`/${type}/detailed/${id}`);
    }

    return (
        <div className="resultsWrapper">
            {data.map((e:dataTypes, i:number) => {
                return (
                    <div key={i} className="resultCard" onClick={() => handleResultClick(e.id)}>
                        <div className="resultImg">
                        <img src={e.backdrop_path ? `http://image.tmdb.org/t/p/w300${e.backdrop_path}` : e.poster_path ? `http://image.tmdb.org/t/p/w342${e.poster_path}` : ErrImg} alt="result poster" />
                        </div>
                        <div className="resultDesc">
                            <h2>{e.title}</h2>
                            {e.overview && <p>{e.overview.slice(0, 250) + "..."}</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
