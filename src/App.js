import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

// Components ORDER BY letter DESC
import Footer from './containers/Footer'
import Header from './containers/Header'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import UpdateProfile from './components/UpdateProfile'

// CSS
import './App.scss';
class App extends Component {
  constructor(){
    super()
      this.state = {
        CurrentUser: null,
        CurrentAvatar: null,
      }
  }
  setCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.user,
      CurrentAvatar: data.avatar
    })
  }
  updateCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.user,
      CurrentAvatar: data.avatar_url
    })
    this.history.push('/profile');
  }
  logout = () => {
    this.setState({
      CurrentUser: null,
      CurrentAvatar: null
    })
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.CurrentUser} logout={this.logout}/>
          <Switch>
            <Route exact path='/updateprofile' render={(props) => <UpdateProfile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar} />} />
            <Route exact path='/signup' render={(props) => <SignUp updateCurrentUser={this.updateCurrentUser} />} />
            <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props} />} />
            <Route exact path='/profile' render={(props) => {
              return this.state.CurrentUser ?
                  <Profile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar} />
                : (
                  <Redirect to='/login' />
                )
              }} />
            <Route exact path='/' component={ Home } />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
