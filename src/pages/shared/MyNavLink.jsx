import { NavLink } from "react-router";

const MyNavLink = ({ to, children, icon: Icon }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? "bg-[#244D3F] text-white px-3 py-1.5 rounded" : "text-gray-600 hover:text-[#244D3F]"} transition-all`
            }
        >
            <span className="flex gap-2 items-center">
                {Icon && <Icon className="text-lg" />} 
                <span className="font-medium">{children}</span>
            </span>
        </NavLink>
    );
};

export default MyNavLink;