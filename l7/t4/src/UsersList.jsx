import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  goPrev = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    const users = this.props.users.slice();
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={users.length}
          itemsPerPage={3}
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
