import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    login: false,
  };

  login = () => {
    this.setState({
      login: true,
    });
  };

  logout = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    return (
      <>
        {this.state.login ? (
          <>
            <Spinner size={8} />
            <Logout onLogout={this.logout} />
          </>
        ) : (
          <Login onLogin={this.login} />
        )}
      </>
    );
  }
}

export default Auth;
