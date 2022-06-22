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

let endPoints:endPoints = {
    "Author Picks": `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    "Featured": `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    "Upcoming": `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1` 
}

const pushHighlights = async () => {
    const startIndex = getRandom(16);
    await Promise.all(Object.values(endPoints).map((endpoint) => axios.get(endpoint))).then(
        axios.spread((first, second, last) => {
            endPoints["Author Picks"] = first.data.results.slice(startIndex, startIndex + 4);
            endPoints["Featured"] = second.data.results.slice(startIndex, startIndex + 4);
            endPoints["Upcoming"] = last.data.results.slice(startIndex, startIndex + 4);
        })
    )
}

export const getHighlights = async () => {
    await pushHighlights();
    return endPoints
}

// const getConf = () => {
//     axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
//     .then(data => {
//         console.log(data);
        
//     })
// }

// getConf();