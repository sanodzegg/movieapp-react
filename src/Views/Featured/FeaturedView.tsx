import React, { useState, useEffect } from "react";
import { HeroComp } from '../../Components/Featured/FeaturedHero/FeaturedHero';
import Header from "../../Components/Header/Header";
import TVAside from "../../Components/TVShows/TVAside/TVAside";
import { getFeatured } from "../../getData";

import "./FeaturedView.css";
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


export default function FeaturedView() {

    const [featuredData, setFeaturedData] = useState<propTypes[]>();

    const [featuredFirst, setFeaturedFirst] = useState<propTypes>();

    const [loaded, setLoaded] = useState(false);

    const getFeaturedData = async () => {
        setFeaturedData(await getFeatured());
    }

    useEffect(() => {
        getFeaturedData();
    }, []);

    useEffect(() => {
        if(featuredData !== undefined) {
            setFeaturedFirst(featuredData[0]);
        }
    }, [featuredData])

    return (
        <>
            <div className="featuredViewWrapper">
                <div className="featuredViewCol">
                    <Header />
                    {!loaded && <Loader />}
                    {featuredFirst && <HeroComp setLoaded={setLoaded} image={featuredFirst.backdrop_path} title={featuredFirst.title} vote={featuredFirst.vote_average}
                    genres={featuredFirst.genre_ids} releaseDate={featuredFirst.release_date} movieID={featuredFirst.id} />}
                    
                    <div className="featuredCardsHeader">
                        <h1>Featured</h1>
                        <p>Featured movie list.</p>
                    </div>
                    <div className="featuredCardsGrid">
                        {featuredData && featuredData.map((e:propTypes, i:number) => {
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
