import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    input: '',
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    let users = this.props.users.slice();
    users = users.map(({ id, name, age }) => {
      return [name.toLowerCase()].includes(this.state.input.toLowerCase()) ||
        this.state.input === '' ? (
        <User key={id} name={name} age={age} />
      ) : null;
    });

    return (
      <div>
        <Filter
          filterText={this.state.input}
          count={users.length}
          onChange={this.onChange}
        />
        <ul className="users">{[...users]}</ul>
      </div>
    );
  }
}

export default UsersList;
