import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [navOpen, setNav] = useState('false')

  const toggleNavBar = () => {
    if(navOpen === 'true'){
      setNav('false');
    }
    else{
      setNav('true');
    }
  }

    // let {toggleNavBar, mode} = this.props;
    return (
      <div className="sticky top-0 z-50 h-16 w-full">
      <header className="w-full bg-cyan-800 text-white h-full flex items-center px-3 justify-between">
        {/* <!-- left elements div --> */}
        <div className="left-div logo">
          <img className="h-10" src="src/img/whatsapp.png" alt="" />
        </div>

        {/* <!-- right elements div --> */}
        <nav className="right-div">
          <button onClick={toggleNavBar} className="p-2 mr-1 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* :className="{'translate-x-full': !navOpen, 'translate-x-0': navOpen}" */}
          <ul className={`fixed left-0 right-0 min-h-screen bg-cyan-800 space-y-2 p-5 mt-3 font-nunito font-semibold text-lg z-50 transform translate-x-full ${navOpen ==='false'?'translate-x-full':'translate-x-0'} duration-300 md:relative md:flex md:min-h-0 md:space-y-0 md:p-0 md:bg-opacity-0 md:opacity-100 md:mt-0 md:space-x-4 md:translate-x-0 md:mr-2`}>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <NavLink to="/home" onClick={toggleNavBar} >Home</NavLink>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <NavLink to="/sports" onClick={toggleNavBar} >Sports</NavLink>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <NavLink to="/health" onClick={toggleNavBar} >Health</NavLink>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <NavLink to="/tech" onClick={toggleNavBar} >Technology</NavLink>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <NavLink to="/science" onClick={toggleNavBar} >Science</NavLink>
            </li>
            <li className="bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none hover:bg-teal-600 duration-300">
              <NavLink to="/" onClick={toggleNavBar} >Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    )
}

export default Navbar


