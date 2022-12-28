import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const menuItems = (
    <>
      <li className="lg:mr-1 mb-1">
        <Link to={`/home`}>
          <FaHome></FaHome>
        </Link>
      </li>
      <li className="lg:mr-1 mb-1">
        <Link to={`/login`}>Login</Link>
      </li>
      <li className="lg:mr-1 mb-1">
        <Link to={`/register`}>Register</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 shadow bg-base-100 rounded-box w-40 overflow-hidden truncate">
          <li className="lg:mr-1 overflow-hidden mb-1">
            <Link to={`/`}>Submenu 10 Submenu 10 Submenu 10</Link>
          </li>
          <li className="lg:mr-1 mb-1">
            <Link to={`/`}>Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li className="lg:mr-1 mb-1">
        <Link to="/">Item 3</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost normal-case text-xl">
          Blaze Media
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={`/`} className="btn" title={`${user ? user.email : ""}`}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
