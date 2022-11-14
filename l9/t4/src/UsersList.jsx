import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    input: '',
    users: this.props.users,
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
      users: this.props.users.filter(
        (elem) =>
          [elem.name.toLowerCase()].includes(e.target.value.toLowerCase()) ||
          e.target.value === ''
      ),
    });
  };

  render() {
    return (
      <div>
        <Filter
          filterText={this.state.input}
          count={this.state.users.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {this.state.users.map((elem) => (
            <User key={elem.id} name={elem.name} age={elem.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
