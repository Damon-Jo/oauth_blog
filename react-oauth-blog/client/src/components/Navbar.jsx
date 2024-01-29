import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Blog App</span>
        <ul className='list'>
            <li className="listItem">
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1200px-Cute_dog.jpg?20140729055059'
                alt=''
                className='avatar'/>
            </li>
            <li className="listItem">Damon Jo</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  )
}

export default Navbar