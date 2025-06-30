import { NavLink } from "react-router-dom";
import type { Path } from "./Navbar";

export default function Navitem({ path, name }: Path) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-slate-800" : "text-gray-400"
      }
      to={path}
    >
      {name}
    </NavLink>
  );
}
