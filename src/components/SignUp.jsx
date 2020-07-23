import React, { Component } from 'react'
import { DirectUpload } from 'activestorage'
class SignUp extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      avatar: {}
    }
  }

  handleOnChange = (event) => {
    if(event.target.name === 'avatar'){
      this.setState({
        [event.target.name]: event.target.files[0]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submiting new user')

    let user = {
      email: this.state.email,
      password: this.state.password
    }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => this.uploadFile(this.state.avatar, data))
    .catch(err => console.warn(err))
  }

  uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if(error){
        console.warn(error)
      }else {
        console.log('YAY! We are susccesful!')
        fetch(`http://localhost:3000/users/${user.id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({avatar: blob.signed_id})
        })
        .then(response => response.json())
        .then(data => this.props.updateCurrentUser(data))
        .catch(err => console.warn(err))
        // debugger
      }
    })
  }
  render(){
    return(
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
          <label>Password:</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange}/>
          <label>Upload your avatar</label>
          <input type='file' name='avatar' onChange={this.handleOnChange}/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default SignUp
