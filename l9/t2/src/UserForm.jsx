import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    about: '',
    occupation: '',
  };

  onSubmit = () => {
    this.props.createUser();
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <form class="login-form" onSubmit={this.onSubmit}>
        <h1 class="form-title">Profile</h1>
        <div class="form-control">
          <label class="form-label" for="name">
            Name
          </label>
          <input
            class="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div class="form-control">
          <label class="form-label" for="student">
            Student
          </label>
          <input
            class="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div class="form-control">
          <label class="form-label" id="occupation" for="occupation">
            Occupation
          </label>
          <select
            value={this.state.occupation}
            name="occupation"
            class="form-input"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div class="form-control">
          <label class="form-label" id="about" for="about">
            About
          </label>
          <textarea value={this.state.about} name="about" class="form-input" />
        </div>
        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
