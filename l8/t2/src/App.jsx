import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = {
    clear: false,
  };

  remove = () => {
    this.setState({
      clear: true,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.remove}>Clear</button>
        {!this.state.clear && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="Berlin" offset={1} />
          </>
        )}
      </>
    );
  }
}

export default App;
