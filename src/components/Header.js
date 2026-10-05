function Header({
    theme,
    toggleTheme
}) {
    return (
        <nav
            className={
                theme === "light"
                    ? "navbar bg-white border-bottom"
                    : "navbar navbar-dark bg-dark border-bottom"
            }
        >
            <div className="container">

                <span
                    className={
                        theme === "light"
                            ? "navbar-brand mb-0 h1 text-dark"
                            : "navbar-brand mb-0 h1 text-light"
                    }
                >
                    Movie Manager
                </span>

                <button
                    className={
                        theme === "light"
                            ? "btn btn-dark"
                            : "btn btn-light"
                    }
                    onClick={toggleTheme}
                >
                    {theme === "light"
                        ? "Dark Mode"
                        : "Light Mode"}
                </button>

            </div>
        </nav>
    );
}

export default Header;