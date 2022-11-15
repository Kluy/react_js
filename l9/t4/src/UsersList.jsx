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
    let users = this.props.users
      .filter(
        (elem) =>
          [elem.name.toLowerCase()].includes(this.state.input.toLowerCase()) ||
          this.state.input === ''
      )
      .map((elem) => <User key={elem.id} name={elem.name} age={elem.age} />);
    // console.log(users);

    // if (this.state.input !== '') {
    //   users = users.filter((elem) =>
    //     [elem.name.toLowerCase()].includes(this.state.input.toLowerCase())
    //   );
    // }

    // let users2 = this.props.users.slice();
    // console.log(users2.map((elem) => elem.name).includes(this.state.input));

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
