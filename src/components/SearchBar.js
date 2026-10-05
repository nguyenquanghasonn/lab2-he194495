import { useRef } from "react";

function SearchBar({
    searchText,
    setSearchText
}) {
    const searchInput = useRef();

    function handleSearch(event) {
        setSearchText(event.target.value);
    }

    function focusSearchInput() {
        searchInput.current.focus();
    }

    return (
        <div className="row mb-3">

            <div className="col-md-9">

                <label className="form-label">
                    Search Movie
                </label>

                <input
                    ref={searchInput}
                    type="text"
                    className="form-control"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Enter movie title"
                />

            </div>

            
        </div>
    );
}

export default SearchBar;