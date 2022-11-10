import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  changeSize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.changeSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSize);
  }

  render() {
    return (
      <div class="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
