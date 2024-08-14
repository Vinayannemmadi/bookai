import { useState } from "react";
import themeContext from "./theme-context";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
    const [theme,setTheme]=useState("light");
    const toggleTheme= ()=>{
        setTheme((preTheme)=>(preTheme=='light'?'dark':'light'));
    }
    const ThemeValue={
        theme,
        toggleTheme,
    }
    return (
        <themeContext.Provider value={ThemeValue}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;