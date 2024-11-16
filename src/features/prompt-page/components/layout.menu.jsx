import { NavLink } from "react-router-dom";

export const Menu = ({ label, href, icon }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center justify-center py-2 px-4 text-sm text-gray-900 rounded-lg ${
          isActive ? "bg-success" : "hover:bg-green-600"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};