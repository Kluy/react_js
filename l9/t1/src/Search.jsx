import React, { Component } from 'react';

class Search extends Component {
  state = {
    online: 'online',
  };

  statusChange = (e) => {
    this.setState({
      online: e.target.navigator.onLine ? 'online' : 'offline',
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.statusChange);
    window.addEventListener('offline', this.statusChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusChange);
    window.removeEventListener('offline', this.statusChange);
  }

  render() {
    return (
      <form className="search">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
