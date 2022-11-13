import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    input: '',
  };

  onSubmit = (e) => {
    alert(`UserForm text: ${this.state.input}`);
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <form class="login-form">
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
            value=""
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
          <select name="occupation" class="form-input">
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
          <textarea name="about" class="form-input"></textarea>
        </div>
        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
