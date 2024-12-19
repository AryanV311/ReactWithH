import { GiHamburgerMenu } from "react-icons/gi"; 

import "../index.css"
import { useState } from "react";

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleButoon = () => {
        setShowMenu(!showMenu)
    }


  return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <h1>ARYAN TECHNICAL</h1>
                </div>

                <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>

                <div className="ham-menu">
                    <button onClick={handleToggleButoon}>
                     <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

// import React from 'react'

