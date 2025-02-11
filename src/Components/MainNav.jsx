import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function MainNav() {
  const { userData } = useSelector((state) => state.userInfo);
  console.log(Object.keys(userData).length > 0);

  return (
    <div className="navbar px-2 md:px-40  fixed text-whiteText z-20 shadow-xl bg-bgTransparent">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>problems</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl capitalize md:pl-3 pl-1  ">
          <img src="/assets/logo.svg" loading="lazy" alt="Logo" className="w-10 h-8 md:w-14 md:h-10   " />
          <span className="logo-name text-xl md:text-2xl tracking-widest">
            <span className="text-mainColor">c</span>
            ode
            <span className="text-mainColor"> f</span>
            ix
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li to="/">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="problems">problems</NavLink>
          </li>

          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/*check if user Exist or no Object.keys(userData).length > 0*/}
        {userData &&  userData?.registered? (
          <>
          <h3 className="mr-2">{userData.displayName}</h3>
            <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex flex-row"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
           
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="my-2">
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          </>
        
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn capitalize text-whiteText mx-0 md:mx-5 bg-transparent border border-mainColor"
            >
              sign in
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-mainColor text-whiteText capitalize hidden md:flex"
            >
              sign up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default MainNav;
