import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  setColorName = (e) => {
    const color = window.getComputedStyle(e.target).backgroundColor;

    let colorTitle;

    if (color === 'rgb(255, 127, 80)') {
      colorTitle = 'Coral';
    } else if (color === 'rgb(0, 255, 255)') {
      colorTitle = 'Aqua';
    } else if (color === 'rgb(255, 228, 196)') {
      colorTitle = 'Bisque';
    }

    this.setState({
      colorName: colorTitle,
    });
  };

  clear = () => {
    this.setState({
      colorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            onMouseLeave={this.clear}
            onMouseOver={this.setColorName}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseLeave={this.clear}
            onMouseOver={this.setColorName}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseLeave={this.clear}
            onMouseOver={this.setColorName}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
