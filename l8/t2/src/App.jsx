import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <>
        <Clock location="London" offset={0} />
        <Clock location="Kyiv" offset={2} />
        <Clock location="Berlin" offset={1} />
      </>
    );
  }
}

export default App;
