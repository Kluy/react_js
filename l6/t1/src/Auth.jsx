import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

// const Auth = (props) => {
//   return (
//     <div className="panel">
//       <Greeting isLoggedIn="true" />;
//       <Login />
//       <Logout />
//     </div>
//   );
// };

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? <Logout /> : <Login />}
      </div>
    );
  }
}

export default Auth;
