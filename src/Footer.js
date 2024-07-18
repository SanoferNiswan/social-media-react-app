import React from 'react'

const Footer = () => {
  const today=new Date();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; Sanofer Niswan {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
