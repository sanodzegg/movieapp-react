import GenreMovieCard from '../GenreMovieCard/GenreMovieCard';

interface dataTypes {
    vote_average: number,
    backdrop_path: string,
    title: string,
    genre_ids: object[],
    id: number
}

export default function GenreWrapper({ data }:any) {
  return (
    <div className="genreMovieWrapper">
        {
            data.map((e:dataTypes, i:number) => {
                return <GenreMovieCard key={i} vote={e.vote_average} imagePath={e.backdrop_path} title={e.title} genres={e.genre_ids} id={e.id}/>
            })
        }
    </div>
  );
}
