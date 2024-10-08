import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Navbar = () => {
  const { user, loading, logOut, setCartCount, cartCount, cartProduct } =
    useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <a>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#1e99f5]" : "")}
            to="/"
          >
            Home
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#1e99f5]" : "")}
            to="/product"
          >
            Products
          </NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#1e99f5]" : "")}
            to="/categories"
          >
            Categories
          </NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#1e99f5]" : "")}
            to="/custom"
          >
            Custom
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#1e99f5]" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </a>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 border-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 font-semibold text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex  items-center gap-2 cursor-pointer">
              <h2 className="bg-[#1e99f5] md:w-[40px] md:flex md:h-[40px] font-semibold md:text-2xl rounded-full hidden justify-center items-center">
                F
              </h2>
              <h2 className="md:text-[26px] font-semibold">
                Furni <span className="text-[#1e99f5]">Flex</span>
              </h2>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <NavLink to="/dashboard">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {cartCount?.count}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="profile"
                      src={
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className=" font-semibold text-base">
                      {user?.displayName}
                    </a>
                  </li>

                  <li>
                    <a>
                      <button
                        onClick={handleLogOut}
                        className="text-red-500 font-semibold text-base"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : loading === true ? (
            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
          ) : (
            <NavLink to="/signUp">
              <button className="bg-[#1e99f5] px-6 py-2 rounded-md font-semibold text-white">
                SignUp
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
