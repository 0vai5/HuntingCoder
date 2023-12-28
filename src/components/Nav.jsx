import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="w-full text-gray-700 bg-slate-300/20 ">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <NavLink
            to={'/'}
            className="text-lg font-semibold tracking-widest blue-gradient_text rounded-lg dark-mode:blue-gradient_text focus:outline-none focus:shadow-outline"
          >
            HuntingCoder
          </NavLink>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d={
                    isOpen
                      ? "M4 4h12v1H4V4zm0 6h12v1H4V10zm0 5h12v1H4v-1z"
                      : "M6 4h8v1H6V4zm0 5h8v1H6V9zm0 5h8v1H6v-1z"
                  }
                  clipRule="evenodd"
                />
              </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            isOpen ? "flex" : "hidden"
          } md:flex md:justify-end md:flex-row`}
        >
          <NavLink
            to={'/'}
            activeclassname="blue-gradient_text"
            exact='true'
            className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0  focus:text-gray-900 hover:blue-gradient_text" 
          >
            Home
          </NavLink>
          <NavLink
            to={'/blog'}
            activeclassname="text-blue-500"
            exact='true'
            className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0  focus:text-gray-900 hover:blue-gradient_text" 
          >
            Blog
          </NavLink>
          <NavLink
            to={'/login'}
            activeclassname="text-blue-500"
            exact='true'
            className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0  focus:text-gray-900 hover:blue-gradient_text" 
          >
            Login
          </NavLink>
          <NavLink
            to={'/signup'}
            activeclassname="text-blue-500"
            exact='true'
            className={"px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0  focus:text-gray-900 hover:blue-gradient_text "} 
          >
            SignUp
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
