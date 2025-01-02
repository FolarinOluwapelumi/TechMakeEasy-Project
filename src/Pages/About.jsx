import {Link} from "react-router-dom";
export default function About(){
    return(
        <>
        <header className="flex bg-blue-200 justify-between px-2 h-[10vh] items-center">
            <div className="logo">Logo</div>
                <ul className=" sm:flex hidden gap-4">
                    <li className="cursor-pointer"><Link to = "/">Home</Link></li>
                    <li className="cursor-pointer"><Link to = "/About">About</Link></li>
                    <li className="cursor-pointer"><Link to = "/SignUp">Tips</Link></li>
                </ul>

                <span className="sm:hidden block">&#9776;</span>
        </header>

        <div>ABOUT PAGE</div>
        </>
    )
}