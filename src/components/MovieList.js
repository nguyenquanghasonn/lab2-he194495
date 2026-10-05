import MovieItem from "./MovieItem";

function MovieList({
    movies,
    favoriteIds,
    toggleFavorite,
    viewDetails
}) {

    // Check movie list is empty
    if (movies.length === 0) {

        return (
            <div className="alert alert-warning">
                No movies found.
            </div>
        );
    }

    return (
        <div>

            {movies.map((movie) => (

                <MovieItem
                    key={movie.id}
                    movie={movie}
                    isFavorite={
                        favoriteIds.includes(movie.id)
                    }
                    toggleFavorite={toggleFavorite}
                    viewDetails={viewDetails}
                />

            ))}

        </div>
    );
}

export default MovieList;