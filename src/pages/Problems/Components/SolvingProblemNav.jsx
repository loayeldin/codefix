import {  faCloudArrowUp, faList, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { executeCodeAction } from "../../../network/ProblemsApi";
const Timer = React.lazy(()=>import('./Timer'))

function SolvingProblemNav({language,editorRef}) {
  const { userData } = useSelector((state) => state.userInfo);
  // const { problem } = useSelector((state) => state.problemDetails);
  const dispatch = useDispatch()
  const runCode = ()=>{
    const sourceCode = editorRef.current.getValue()
    console.log(sourceCode , language);
    if(!sourceCode) return;
    dispatch(executeCodeAction({lang:language, sourceCode:sourceCode})).then((res)=>{
      console.log(res);
    })
  }
  return (
    <nav className="navbar px-4 static text-whiteText z-20 shadow-xl bg-bgTransparent">
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
        <NavLink
          to="/"
          className="btn btn-ghost text-xl capitalize md:pl-3 pl-1  "
        >
          <img
            src="/assets/logo.svg"
            loading="lazy"
            alt="Logo"
            className="w-10 h-8 md:w-10 md:h-8   "
          />
        </NavLink>
        <span className="logo-name text-xl ml-2 md:text-lg tracking-widest capitalize">
          <FontAwesomeIcon icon={faList} className="text-[17px] mr-1" />
          problems list
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li to="/">
            <button className="btn btn-sm btn-neutral capitalize text-whiteText " onClick={runCode}>
              <FontAwesomeIcon icon={faPlay} className="text-mainColor" />
              run code
            </button>
          </li>
          <li className="mx-4">
            <button className="btn btn-sm btn-neutral capitalize text-green-300">
              <FontAwesomeIcon icon={faCloudArrowUp}  />
              submit
            </button>
          </li>
          <li>
              <Timer/>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        {/*check if user Exist or no Object.keys(userData).length > 0*/}

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
      </div>
    </nav>
  );
}

export default SolvingProblemNav;
