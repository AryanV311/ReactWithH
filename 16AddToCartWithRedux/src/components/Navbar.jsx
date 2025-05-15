import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const items = useSelector(state => state.cart.items)

  return (
    <div className='navbar'>
        <nav>
            <Link to='/'><h1 className='heading'> Redux Store</h1></Link>
            <ul>
                <Link to="/cart"><li>cart</li></Link>
                <li>Cart Items: {items.length}</li>
            </ul>
        </nav>
    </div>
  )
}
