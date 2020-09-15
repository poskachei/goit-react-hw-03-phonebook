import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeText = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          required="name"
          value={name}
          name="name"
          id="name"
          type="text"
          onChange={this.handleChangeText}
        />
        <label htmlFor="number"> Number </label>
        <input
          required="number"
          value={number}
          name="number"
          id="number"
          type="text"
          onChange={this.handleChangeNumber}
        />
        <button type="submit"> Add contact</button>
      </form>
    );
  }
}
