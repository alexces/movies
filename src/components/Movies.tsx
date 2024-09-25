import { MovieResult } from '../hooks/useMovies';
import Movie from './Movie';

type MoviesProps = {
    movies: MovieResult[]
};

function Movies({ movies }: MoviesProps) {
    return movies.map((movie) =>
        <Movie title={movie.title} poster={movie.poster_path} key={movie.id} />
    )
}

export default Movies;