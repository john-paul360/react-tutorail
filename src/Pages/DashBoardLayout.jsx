import React from 'react'
import { Link, Outlet, NavLink } from "react-router-dom"

const DashBoardLayout = () => {
  return (
    <div>
      <section className="flex h-screen">
        {/* sidebar dashboard */}
        <div className="w-[20%] bg-gray-400 text-white">
          <h1 className="text-4xl font-bold">DashBoard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl">
            <NavLink
              to="/DashBoard"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              Spam
            </NavLink>
          </nav>
        </div>

        {/* outlet children */}
        <div className="w-[80%] p-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashBoardLayout