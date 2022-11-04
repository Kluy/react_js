import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  getColor = (e) => {
    console.log(e.target);
    this.setState({
      colorName: 'adsds',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            onMouseOver={this.getColor}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={this.getColor}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={this.getColor}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
