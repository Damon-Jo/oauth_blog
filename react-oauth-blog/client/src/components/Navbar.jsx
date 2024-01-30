import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className="navbar">
        <span className="logo">
            <Link to='/' className='link'> Blog App</Link>
        </span> {
            user ? (
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
            ) : (
              <Link className='link' to='/login'>Login</Link>
            )
        }

    </div>
  )
}

export default Navbar