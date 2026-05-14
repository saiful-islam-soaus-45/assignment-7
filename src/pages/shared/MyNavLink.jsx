import { BiHomeAlt2 } from "react-icons/bi";
import { NavLink } from "react-router";

const MyNavLink = ({to,children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? "bg-[#244D3F] text-white px-2 py-1 rounded" : "text-gray-600 "}`
            }
        >
            <span className="flex gap-1 items-center">
                <BiHomeAlt2 /> {children}
            </span>
        </NavLink>
    );
};

export default MyNavLink;