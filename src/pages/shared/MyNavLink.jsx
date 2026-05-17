import { NavLink } from "react-router";

const MyNavLink = ({ to, icon: Icon, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                ${
                    isActive
                        ? "bg-[#244D3F] text-white"
                        : "text-[#1F2937] hover:bg-gray-100"
                }`
            }
        >
            <Icon className="text-xl shrink-0" />
            <span>{children}</span>
        </NavLink>
    );
};

export default MyNavLink;