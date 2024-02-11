import React from 'react'
import brand_logo from './logo/brand_logo.svg'
const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo'><img src={brand_logo} alt="logo" /></div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      <button className='login'>Login</button>
    </nav>
  )
}

export default Navbar