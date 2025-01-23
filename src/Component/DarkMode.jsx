import react, { useEffect, useState } from "react";
import {BiSolidSun, BiSolidMoon} from "react-icons/bi";

export default function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme"): "light"
    );

    const elemen = document.documentElement;

    useEffect(() => {
        if (theme == "dark"){
            elemen.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else {
            elemen.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <>
            {
                theme == "dark" ? <BiSolidSun onClick={() => setTheme("light")} className="text-2xl "/>
                 : <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl"/>
            }
        </>
    );
}

