import { useContext, useMemo, useState } from "react";
import { movies } from "./datas/movies";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

import { ThemeContext } from "./context/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

    // Step 1: Declare states
    const [searchText, setSearchText] = useState("");

    const [selectedGenre, setSelectedGenre] =
        useState("All Genres");

    const [sortOption, setSortOption] =
        useState("default");

    const [selectedMovie, setSelectedMovie] =
        useState(null);

    // Step 2: Manage favorite IDs using Local Storage
    const [favoriteIds, setFavoriteIds] =
        useLocalStorage("movie_favorites", []);

    // Step 3: Get theme from Context
    const { theme, toggleTheme } =
        useContext(ThemeContext);

    // Step 4: Search, filter and sort movies
    const displayedMovies = useMemo(() => {

        let result = [...movies];

        // Search movie by title
        result = result.filter((movie) =>
            movie.title
                .toLowerCase()
                .includes(searchText.toLowerCase())
        );

        // Filter movie by genre
        if (selectedGenre !== "All Genres") {
            result = result.filter(
                (movie) =>
                    movie.genre === selectedGenre
            );
        }

        // Sort rating high to low
        if (sortOption === "high-low") {
            result.sort(
                (firstMovie, secondMovie) =>
                    secondMovie.rating - firstMovie.rating
            );
        }

        // Sort rating low to high
        if (sortOption === "low-high") {
            result.sort(
                (firstMovie, secondMovie) =>
                    firstMovie.rating - secondMovie.rating
            );
        }

        return result;

    }, [searchText, selectedGenre, sortOption]);

    // Step 5: Get favorite movie list
    const favoriteMovies = movies.filter((movie) =>
        favoriteIds.includes(movie.id)
    );

    // Step 6: Add or remove favorite movie
    function toggleFavorite(movieId) {

        if (favoriteIds.includes(movieId)) {

            setFavoriteIds(
                favoriteIds.filter(
                    (id) => id !== movieId
                )
            );

        } else {

            setFavoriteIds([
                ...favoriteIds,
                movieId
            ]);
        }
    }

    // Step 7: Delete movie from favorite list
    function removeFavorite(movieId) {

        setFavoriteIds(
            favoriteIds.filter(
                (id) => id !== movieId
            )
        );
    }

    // Step 8: View movie detail
    function viewDetails(movie) {
        setSelectedMovie(movie);
    }

    // Step 9: Close movie detail
    function closeDetails() {
        setSelectedMovie(null);
    }

    // Step 10: Display UI
    return (
        <div
            className={
                theme === "light"
                    ? "bg-light text-dark min-vh-100"
                    : "bg-dark text-light min-vh-100"
            }
        >

            <Header
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <div className="container py-4">

                {/* Search */}
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                {/* Genre and Sort */}
                <div className="row mb-3">

                    <div className="col-md-6">

                        <label className="form-label">
                            Genre
                        </label>

                        <GenreFilter
                            selectedGenre={selectedGenre}
                            setSelectedGenre={setSelectedGenre}
                        />

                    </div>

                    <div className="col-md-6">

                        <label className="form-label">
                            Sort
                        </label>

                        <select
                            className="form-select"
                            value={sortOption}
                            onChange={(event) =>
                                setSortOption(event.target.value)
                            }
                        >

                            <option value="default">
                                Default
                            </option>

                            <option value="high-low">
                                Rating: High → Low
                            </option>

                            <option value="low-high">
                                Rating: Low → High
                            </option>

                        </select>

                    </div>

                </div>

                {/* Total movies */}
               <div className="alert alert-secondary">
                   Total Movies: {movies.length}
                           {" | "}
                   Favorites: {favoriteMovies.length}
                           {" | "}
                    Displaying: {displayedMovies.length}
                 </div>

                {/* Movie list */}
                <MovieList
                    movies={displayedMovies}
                    favoriteIds={favoriteIds}
                    toggleFavorite={toggleFavorite}
                    viewDetails={viewDetails}
                />

                {/* Favorite list */}
                <div className="mt-5">

                    <h3 className="mb-3">
                        Favorite Movies
                    </h3>

                    {favoriteMovies.length === 0 ? (

                        <div className="alert alert-info">
                            No favorite movies.
                        </div>

                    ) : (

                        favoriteMovies.map((movie) => (

                            <div
                                className="card mb-2"
                                key={movie.id}
                            >

                                <div className="card-body d-flex justify-content-between align-items-center">

                                    <div>

                                        <h5 className="mb-1">
                                            {movie.title}
                                        </h5>

                                        <p className="mb-0">
                                            {movie.genre}
                                            {" | "}
                                            {movie.year}
                                            {" | "}
                                            ⭐ {movie.rating}
                                        </p>

                                    </div>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            removeFavorite(movie.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {/* Movie Detail */}
                <MovieDetail
                    movie={selectedMovie}
                    closeDetails={closeDetails}
                />

            </div>
        </div>
    );
}

export default App;