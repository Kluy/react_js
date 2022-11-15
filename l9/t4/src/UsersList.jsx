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
    let users3 = this.props.users.map((elem) => elem.name.toLowerCase());

    const t = users3.includes(this.state.input.toLowerCase());

    let users = this.props.users.slice();
    if (t) {
      users = users.filter((elem) =>
        [elem.name.toLowerCase()].includes(this.state.input.toLowerCase())
      );
    }

    users = users.map((elem) => (
      <User key={elem.id} name={elem.name} age={elem.age} />
    ));

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
