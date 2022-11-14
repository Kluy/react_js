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
    let users = this.props.users.filter(
      (elem) =>
        [elem.name.toLowerCase()].includes(this.state.input.toLowerCase()) ||
        this.state.input === ''
    );

    console.log(this.props.users);

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

//  let users = this.props.users.slice();
//  users = users.map(({ id, name, age }) => {
//    if (
//      [name.toLowerCase()].includes(this.state.input.toLowerCase()) ||
//      this.state.input === ''
//    )
//      return <User key={id} name={name} age={age} />;
//  });
//  console.log(users);
