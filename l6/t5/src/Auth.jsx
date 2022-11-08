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

  timeout = () => {
    const id = setInterval(() => {}, 2000);
  };

  render() {
    return (
      <>
        {this.state.login ? (
          <>
            <Spinner size={50} />
            {setTimeout(
              () => (
                <Logout onLogout={this.logout} />
              ),
              2000
            )}
          </>
        ) : (
          <Login onLogin={this.login} />
        )}
      </>
    );
  }
}

export default Auth;
