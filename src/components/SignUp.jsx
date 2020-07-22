import React, { Component } from 'react'

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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.email)
  }
  render(){
    return(
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}/>

          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default SignUp
