import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  // console.log('inside Navbar ',props);
  return(
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        {props.currentUser ?(
            <>
              <Link to='/profile'>My Profile</Link>
              <Link onClick={props.logout}>Logout</Link>
            </>
        ) : (
          <Fragment>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
