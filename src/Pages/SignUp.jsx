import {Link} from "react-router-dom"

export default function SignUp(){
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

        <body>
           <div className="h-[100vh] w-[100vw] grid place-content-center">
           <form className="border-black border-[1px] h-[50vh] w-[50vw] p-5 ">
                <label htmlFor="" className="block">Name</label>
                <input type="text" className="border-black border-[1px] rounded" />
                <label htmlFor="" className="block">Stack</label>
                <input type="text" className="border-black border-[1px] rounded" />
                <label htmlFor="" className="block">Email</label>
                <input type="email" className="border-black border-[1px] rounded" />
                <label htmlFor="" className="block">Password</label>
                <input type="password" className="border-black border-[1px] rounded" />
                <label htmlFor="" className="block">Confirm Password</label>
                <input type="password" className="border-black border-[1px] rounded" />
           </form>
           </div>
        </body>
        </>
    )
}