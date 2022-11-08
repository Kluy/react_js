import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    login: false,
  };

  login = () => {
    this.timeout();

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
    return setTimeout(() => {
      console.log('timeout');
      return <Logout onLogout={this.logout} />;
    }, 2000);
  };

  //  {setTimeout(
  //             () => (
  //
  //             ),
  //             2000
  //           )}

  render() {
    return (
      <>
        {this.state.login ? (
          <>
            <Spinner size={50} />
          </>
        ) : (
          <Login onLogin={this.login} />
        )}
      </>
    );
  }
}

export default Auth;
