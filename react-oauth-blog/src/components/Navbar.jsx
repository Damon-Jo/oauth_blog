import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Blog App</span>
        <ul className='list'>
            <li className="listItem">
                <img src='' alt='' className='avatar'/>
            </li>
            <li className="listItem">Damon Jo</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  )
}

export default Navbar