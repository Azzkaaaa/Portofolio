import react from "react"
import DarkMode from "./DarkMode";

export default function NavBar() {
    const NavLink = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "About",
            link: "/#about",
        },
        {
            id: 1,
            name: "Projects",
            link: "/#projects",
        },
        {
            id: 1,
            name: "Contact",
            link: "/#contact",
        },
    ]
    return (
        <div className="shadow-md w-full dark:bg-black dark:text-white">
            <div className="container py-2 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-3xl font-bold">
                            Portofolio
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex items-center gap-6 pr-10">
                            {
                                NavLink.map (( {id, name, link}) => 
                                (
                                <li key={id}>
                                    <a className="inline-block text-lg font-medium py-3 hover:text-primary transition-all duration-400"
                                     href={link}>
                                        {name}
                                    </a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    );
};