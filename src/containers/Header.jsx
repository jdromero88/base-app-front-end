import React from 'react'
import Navbar from '../components/Navbar'
const Header = (props) => {
  console.log('In header ', props);
  return (
    <>
      <Navbar currentUser={props.currentUser} logout={props.logout}/>
    </>
  )
}

export default Header
