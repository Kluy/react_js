import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  setColorName = (e) => {
    const clasess = e.target.className.split('_');
    this.setState({
      colorName: clasess[clasess.length - 1],
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
