import react from "react"

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
            <div className="container">
                <div className="flex justify-between item-center">
                    <div>
                        <span className="text-3xl font-bold">
                            Portofolio
                        </span>
                    </div>
                    <div>
                        <ul className="flex item-center gap-6 pr-10">
                            {
                                NavLink.map (( {id, name, link}) => 
                                (
                                <li key={id}>
                                    <a className="inline-block text-lg font-medium py3 hover:text-primary transition-all duration-400"
                                     href={link}>
                                        {name}
                                    </a>
                                </li>

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};