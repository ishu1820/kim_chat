

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
            </nav>
        </>
    );
}

export default Navbar;