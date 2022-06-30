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
    )
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
    const data = await res.data.results
    return data;    
}

// const getConf = () => {
//     axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
//     .then(data => {
//         console.log(data);
        
//     })
// }

// getConf();