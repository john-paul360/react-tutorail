import React from 'react'
import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-[80px] container">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex gap-3 items-center">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "underline btn btn-accent" : " btn btn-accent")}
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header