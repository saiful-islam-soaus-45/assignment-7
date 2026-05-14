import MyNavLink from "./MyNavLink";

const Navbar = () => {
    return (
        <nav className="shadow-sm">

            <div className="w-11/12 mx-auto ">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">

                        <p className="font-bold text-3xl text-[#1F2937]">Keen<span className="font-semibold text-[#244D3F] ">Keeper</span></p>
                    </div>

                    <div className="navbar-end">
                        <ul className="flex gap-8">
                            
                            <MyNavLink to={'/'}>Home</MyNavLink>
                            <MyNavLink to={'/timeline'}>Timeline</MyNavLink>
                            <MyNavLink to={'/stats'}>Stats</MyNavLink>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;