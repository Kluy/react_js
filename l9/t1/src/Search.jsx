import React, { Component } from 'react';

class Search extends Component {
  state = {
    input: '',
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
        <button
          onClick={() => alert(`Search text: ${this.state.input}`)}
          className="search__button"
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
