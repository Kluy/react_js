import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  setColorName = (e) => {
    this.setState({
      colorName: e.target.dataset.color,
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
            data-color="Color"
            onMouseLeave={this.clear}
            onMouseOver={this.setColorName}
            className="picker__button picker__button_coral"
          ></button>
          <button
            data-color="Aqua"
            onMouseLeave={this.clear}
            onMouseOver={this.setColorName}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            data-color="Bisque"
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
