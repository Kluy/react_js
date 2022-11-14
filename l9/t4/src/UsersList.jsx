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
    let users = this.props.users.filter((elem) =>
      this.state.input === ''
        ? elem
        : elem.name.toLowerCase() === this.state.input.toLowerCase()
    );

    return (
      <div>
        <Filter
          filterText={this.state.input}
          count={users.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {users.map((elem) => (
            <User key={elem.id} name={elem.name} age={elem.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
