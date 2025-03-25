import { useState } from "react";

export function useTheme() {

    const [toggle, setToggle] = useState(true);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (toggle) {
            setTheme("dark");
            setToggle(!toggle);
        } else {
            setTheme("light");
            setToggle(!toggle);
        }
    }

    return { theme, toggleTheme }

}