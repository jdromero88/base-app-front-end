import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      test: ''
    }
  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      email: this.state.email,
      password: this.state.password,
      test: this.state.test
    }

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      this.props.setCurrentUser(data)
      this.props.routerProps.history.push('/profile')
    })
    .catch(err => console.warn(err))
  }
  render() {

    return(
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>e-mail: </label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleOnChange} />
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange}/>
          <input type='submit' value='Login' />
        </form>
        <p>This is the login component</p>

      </div>
    )
  }
}
export default Login
