import { BiHomeAlt2 } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
    return (
        <nav className="shadow-sm bg-white">
            <div className="w-11/12 mx-auto">
                <div className="navbar py-4">
                    <div className="navbar-start">
                        <p className="font-bold text-3xl text-[#1F2937]">
                            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
                        </p>
                    </div>

                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            <li>
                                <MyNavLink to={'/'} icon={BiHomeAlt2}>Home</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to={'/timeline'} icon={RiTimeLine}>Timeline</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to={'/stats'} icon={TfiStatsUp}>Stats</MyNavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;