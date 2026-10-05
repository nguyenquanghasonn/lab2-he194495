function MovieItem({
    movie,
    isFavorite,
    toggleFavorite,
    viewDetails
}) {
    return (
        <div className="card mb-3">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    {/* Movie title */}
                    <div>
                        <h5 className="card-title mb-0">
                            {movie.title}
                        </h5>
                    </div>

                    {/* Movie information and buttons */}
                    <div className="text-end">

                        <p className="card-text mb-2">
                            {movie.genre}
                            {" | "}
                            {movie.year}
                            {" | "}
                            ⭐ {movie.rating}
                        </p>

                        <div className="d-flex justify-content-end gap-2">

                            <button
                                className={
                                    isFavorite
                                        ? "btn btn-warning"
                                        : "btn btn-outline-warning"
                                }
                                onClick={() =>
                                    toggleFavorite(movie.id)
                                }
                            >
                                {isFavorite
                                    ? "★ Unfavorite"
                                    : "☆ Favorite"}
                            </button>

                            <button
                                className="btn btn-info"
                                onClick={() =>
                                    viewDetails(movie)
                                }
                            >
                                View Details
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MovieItem;