import {
    createContext,
    useState
} from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {}
});

export function ThemeProvider({
    children
}) {

    const [theme, setTheme] =
        useState("light");

    function toggleTheme() {

        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}