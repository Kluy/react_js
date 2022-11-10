import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  shouldComponentUpdate() {
    console.log();
    return true;
  }

  componentDidUpdate() {
    console.log();
  }

  componentWillUnmount() {
    console.log();
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">New York</div>
        <div className="clock__time">7:00:51 AM</div>
      </div>
    );
  }
}

export default Clock;
