import React from 'react'
import "./Navbar.css"

import {NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-menu'>
        <div className='profile'>
          <p>Aryan</p>
        </div>
        <ul className='nav-link'>
          <NavLink className='link' to='/'>
              <li>Home</li>
          </NavLink>
          <NavLink className='link' to='/about'>
              <li>About</li>
          </NavLink>
          <NavLink className='link' to='/skill'>
              <li>Skill</li>
          </NavLink>
          <NavLink className='link' to='/contact'>
              <li>Contact us</li>
          </NavLink>
        </ul>
        </div>
    </div>
  )
}
