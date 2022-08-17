import "./DetailedMovieVideo.css";

interface props {
    name: string,
    videokey: string,
    type: string
}

export default function DetailedMovieVideo({ name, videokey, type }:props) {
  return (
    <div className="detailedMovieVideoWrapper">
        <h1>Official trailer for the {type}:</h1>
        <iframe className="detailedMovieIFRM" src={`https://www.youtube.com/embed/${videokey}`} title={name} allowFullScreen></iframe>
    </div>
  );
}
