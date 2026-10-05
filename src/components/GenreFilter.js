function GenreFilter({
    selectedGenre,
    setSelectedGenre
}) {

    function handleGenreChange(event) {
        setSelectedGenre(event.target.value);
    }

    return (
        <select
            className="form-select"
            value={selectedGenre}
            onChange={handleGenreChange}
        >

            <option value="All Genres">
               Tất cả thể loại            
               </option>

            <option value="Action">
                Action
            </option>

            <option value="Animation">
                Animation
            </option>

            <option value="Comedy">
                Comedy
            </option>

            <option value="Drama">
                Drama
            </option>

            <option value="Romance">
                Romance
            </option>

            <option value="Sci-Fi">
                Sci-Fi
            </option>

        </select>
    );
}

export default GenreFilter;