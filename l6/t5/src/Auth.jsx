import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    login: false,
  };

  login = () => {
    <Spinner size={50} />;

    setTimeout(() => {
      this.setState({
        login: true,
      });
    }, 2000);
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
