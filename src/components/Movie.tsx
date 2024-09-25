
type MovieProps = {
    title: string
    poster?: string
}

function Movie({ title, poster }: MovieProps) {
    return (
        <div className="movie-poster">
            <p>
                Title: {title}
            </p>
            {poster ?
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} /> : "No poster"}
        </div>
    )
};

export default Movie;