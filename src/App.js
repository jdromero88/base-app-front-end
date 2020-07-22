import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './containers/Header'
import Home from './components/Home'
import Login from './components/Login'
import Singup from './components/Singup'
import Profile from './components/Profile'
import Footer from './containers/Footer'
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
  render(){
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/singup' component={ Singup } />
            <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props} />} />
            <Route exact path='/profile' render={() => {
              return this.state.CurrentUser ?
                  <Profile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar} />
                : (
                  <Login setCurrentUser={this.setCurrentUser} />
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
