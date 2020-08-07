import React from 'react'

const UpdateProfile = (props) => {
  return(
    <div>
      <h1>Update yor Profile <strong>{props.currentUser.first_name}</strong></h1>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit=''>
          <label>E-mail:</label>
          <input type="email" name="email" value='' onChange=''/>
          <label>Password:</label>
          <input type='password' name='password' value='' onChange=''/>
          <label>Upload your avatar</label>
          <input type='file' name='avatar' onChange=''/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
