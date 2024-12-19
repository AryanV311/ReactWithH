/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("Dark");

    const handleToggleButton = () => {
        setTheme((prev) => prev === "Dark" ? "Light": "Dark")
    }


    return (
        <AuthContext.Provider value={ { theme, handleToggleButton } }>
            { children }
        </AuthContext.Provider>
    )
}