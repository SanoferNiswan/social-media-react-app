import React from 'react'
// import logo from './l3.png'
const Header = ({title}) => {
  return (
    <header className='Header'>
      {/* <img src={logo} alt="logo" className='logo'/> */}
      <h1>{title}</h1>
    </header>
  )
}

export default Header