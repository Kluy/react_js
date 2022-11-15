import React, { Component } from 'react';

class Square extends Component {
  state = {
    val: '',
  };

  onClick = (e) => {
    this.setState({
      val: 'X',
    });
  };

  render() {
    return (
      <button onClick={this.onClick} className="square">
        {this.state.val}
      </button>
    );
  }
}

export default Square;
