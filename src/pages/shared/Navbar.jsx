import { useState } from "react";
import { BiHomeAlt2, BiMenu, BiX } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="shadow-sm bg-white">
            <div className="w-11/12 mx-auto">
                <div className="flex items-center justify-between py-4">

                    {/* Logo */}
                    <div>
                        <p className="font-bold text-2xl md:text-3xl text-[#1F2937]">
                            Keen
                            <span className="font-semibold text-[#244D3F]">
                                Keeper
                            </span>
                        </p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            <li>
                                <MyNavLink to={"/"} icon={BiHomeAlt2}>
                                    Home
                                </MyNavLink>
                            </li>

                            <li>
                                <MyNavLink to={"/timeline"} icon={RiTimeLine}>
                                    Timeline
                                </MyNavLink>
                            </li>

                            <li>
                                <MyNavLink to={"/stats"} icon={TfiStatsUp}>
                                    Stats
                                </MyNavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-3xl text-[#244D3F]"
                    >
                        {open ? <BiX /> : <BiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4">
                        <ul className="flex flex-col gap-3">
                            <li className="w-full">
                                <MyNavLink to={"/"} icon={BiHomeAlt2}>
                                    Home
                                </MyNavLink>
                            </li>

                            <li className="w-full">
                                <MyNavLink to={"/timeline"} icon={RiTimeLine}>
                                    Timeline
                                </MyNavLink>
                            </li>

                            <li className="w-full">
                                <MyNavLink to={"/stats"} icon={TfiStatsUp}>
                                    Stats
                                </MyNavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;