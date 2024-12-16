import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mainheader'>
        <div className='header'><b>Welcome to EKART</b></div>
        <Link className='products' to='/'>Products</Link>
        <Link className='cart' to='/cart'>Cart</Link>
    </div>
  )
}

export default Header