import React from 'react'

const Profile = (props) => {
  return(
    <div>
      <p>this is the profile</p>
      <h1>Welcome <strong>{props.currentUser.first_name}</strong></h1>
      <img src={`http://localhost:3000/${props.currentAvatar}`} alt={props.currentUser.name}/>
    </div>
  )
}

export default Profile
