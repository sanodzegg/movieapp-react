import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import TVAside from "../../Components/TVShows/TVAside/TVAside";
import { getAuthorPicks } from '../../getData';

import { HeroComp } from "../../Components/Featured/FeaturedHero/FeaturedHero";

import "./AuthorPicks.css";
import Loader from '../../Components/Landing/Loader/Loader';
import Moviecard from "../../Components/Landing/Highlights/Moviecard/Moviecard";
import Footer from "../../Components/Footer/Footer";

interface propTypes {
    title: string,
    backdrop_path: string,
    vote_average: number,
    genre_ids: number[],
    release_date: string,
    id: number
}


export default function AuthorPicksView() {

    const [authorData, setAuthorData] = useState<propTypes[]>();

    const [authorFirst, setAuthorFirst] = useState<propTypes>();

    const [loaded, setLoaded] = useState(false);

    const getFeaturedData = async () => {
        setAuthorData(await getAuthorPicks());
    }

    useEffect(() => {
        getFeaturedData();
    }, []);

    useEffect(() => {
        if(authorData !== undefined) {
            setAuthorFirst(authorData[0]);
        }
    }, [authorData])

    return (
        <>
            <div className="featuredViewWrapper">
                <div className="featuredViewCol">
                    <Header />
                    {!loaded && <Loader />}
                    {authorFirst && <HeroComp setLoaded={setLoaded} image={authorFirst.backdrop_path} title={authorFirst.title} vote={authorFirst.vote_average}
                    genres={authorFirst.genre_ids} releaseDate={authorFirst.release_date} movieID={authorFirst.id} />}
                    
                    <div className="featuredCardsHeader">
                        <h1>Author Picks</h1>
                        <p>List of movies picked by author.</p>
                    </div>
                    <div className="featuredCardsGrid">
                        {authorData && authorData.map((e:propTypes, i:number) => {
                            return <Moviecard imagePath={e.backdrop_path} vote={e.vote_average} title={e.title} genres={e.genre_ids} id={e.id} />
                        })}
                    </div>
                    <Footer />
                </div>

                <div className="featuredViewCol aside">
                    {loaded && <TVAside />}
                </div>
            </div>
        </>
    );
}
