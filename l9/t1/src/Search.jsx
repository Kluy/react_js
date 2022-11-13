import React, { Component } from 'react';

class Search extends Component {
  state = {
    input: '',
  };

  handleClick = (e) => {
    alert(`Search text: ${this.state.input}`);
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.input}
          className="search__input"
        />
        <button onClick={this.handleClick} className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
