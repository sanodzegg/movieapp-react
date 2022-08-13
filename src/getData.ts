import axios from "axios";
import { getRandom } from './helpers';

export const getGenres = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await res.data;
    return data;
}

interface endPoints {
    "Author Picks": string | object,
    "Featured": string | object,
    "Upcoming": string | object
}

export const pushHighlights = async () => {
    let endPoints:endPoints = {
        "Author Picks": `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        "Featured": `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        "Upcoming": `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1` 
    }

    const startIndex = getRandom(16);
    await Promise.all(Object.values(endPoints).map((endpoint) => axios.get(endpoint))).then(
        axios.spread((first, second, last) => {
            endPoints["Author Picks"] = first.data.results.slice(startIndex, startIndex + 4);
            endPoints["Featured"] = second.data.results.slice(startIndex, startIndex + 4);
            endPoints["Upcoming"] = last.data.results.slice(startIndex, startIndex + 4);
        })
    );
    return endPoints;
}

export const UpcomingList = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await res.data.results;
    return data;
}

export const getTVShows = async (page:number) => {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
    const data = await res.data.results;

    await data.sort((a:any, b:any) => {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    })
    
    return data;
}

export const mixTVnMovie = async () => {
    let endPoints = [
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    ];

    let randomSlicer = getRandom(16);

    if (randomSlicer === 0) {
        randomSlicer =+ 1;
    }

    await Promise.all(endPoints.map((endpoint) => axios.get(endpoint))).then(
        axios.spread((movies, tvshows) => {
            endPoints = [];
            endPoints.push(movies.data.results.slice(randomSlicer, randomSlicer + 4), tvshows.data.results.slice(randomSlicer, randomSlicer + 3));
        })
    );
    return endPoints;
}

export const getWithGenre = async (genre:number) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&with_genres=${genre}`);
    const data = await res.data.results;
    return data;    
}

export const getMovieReviews = async (movieid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await res.data.results;
    return data;
}

export const getMovieDetailed = async (movieid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await res.data;
    return data;
}

export const getMovieTrailer = async (movieid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await res.data.results;
    const trailer = await data[data.length - 1];
    return trailer;
}

export const getShowReviews = async (showid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${showid}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await res.data.results;
    return data;
}

export const getShowDetailed = async (showid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${showid}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await res.data;
    return data;
}

export const getShowTrailer = async (showid:string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${showid}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await res.data.results;
    const trailer = await data[data.length - 1];
    return trailer;
}

export const getFeatured = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await res.data.results;
    return data;
}

export const getAuthorPicks = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await res.data.results;
    return data;
}

export const search = async (term:string) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${term}`);
        const data = await res.data.results;
        if(data.length === 0) {
            const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${term}`);
            const data = await res.data.results;
            if(data.length === 0) {
                throw new Error("No movie/tv show found.");
            } return {data: data, type: "tvshows"};
        } return {data: data, type: "movie"};
    } catch(err) {
        console.error(err);
    }
}

const getConf = () => {
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(data => {
        console.log(data);
        
    });
}

getConf();