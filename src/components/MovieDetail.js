function MovieDetail({
    movie,
    closeDetails
}) {

    // No movie selected
    if (movie === null) {
        return null;
    }

    return (
        <div className="card mt-4">

            <div className="card-header">
                Movie Detail
            </div>

            <div className="card-body">

                <h4>
                    {movie.title}
                </h4>

                <p>
                    <strong>Genre:</strong>{" "}
                    {movie.genre}
                </p>

                <p>
                    <strong>Year:</strong>{" "}
                    {movie.year}
                </p>

                <p>
                    <strong>Rating:</strong>{" "}
                    {movie.rating}
                </p>

                <p>
                    <strong>Director:</strong>{" "}
                    {movie.director}
                </p>

                <p>
                    <strong>Duration:</strong>{" "}
                    {movie.duration}
                </p>

                <p>
                    <strong>Description:</strong>{" "}
                    {movie.description}
                </p>

                <button
                    className="btn btn-danger"
                    onClick={closeDetails}
                >
                    Close
                </button>

            </div>

        </div>
    );
}

export default MovieDetail;