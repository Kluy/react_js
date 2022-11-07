import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component() {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />;
        <Login />
        <Logout />
      </div>
    );
  }
}

export default Auth;
