

function Navbar() {
    
    return (
        <>
            <nav className="navbar bg-amber-300 p-4 m-1 flex items-center">
                <div id="logo">
                    <img src="kim.svg" alt="logo" className="w-30 p-1 m-0.5" />
                </div>

                <div id="title" className="text-2xl font-bold">
                    <h1>KIM CHAT</h1>
                </div>

                <div id="navItems" className="flex items-center fixed right-20 font-black">
                    <ul className="flex items-center">
                        <li className="m-2 hover:bg-blue-700">
                            <a href="">Home</a>
                        </li>
                        <li className="m-2  hover:bg-blue-700">
                            <a href="">About</a>
                        </li>
                        <li className="m-2  hover:bg-blue-700">
                            <a href="">Login</a>
                        </li>
                        <li className="m-2  hover:bg-blue-700">
                            <a href="">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;