import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  // console.log('inside Navbar ',props);
  return(
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {props.currentUser ?(
            <>
              <li><Link to='/profile'>My Profile</Link></li>
              <li onClick={props.logout}><a href='#top' >Logout</a></li>
            </>
        ) : (
          <Fragment>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
