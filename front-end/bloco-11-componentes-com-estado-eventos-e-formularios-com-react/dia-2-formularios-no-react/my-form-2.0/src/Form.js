import React from "react";
import './Form.css';
import Name from "./Name";
import Email from "./Email";
import CPF from "./CPF";
import Address from "./Address";
import City from "./City";
import State from "./State";
import Type from "./Type";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      state: 'Select a state',
      type: ''
    }
  };

  handleChange({ target }) {
    const { name, value } = target
    // const value = target.type === 'radio' ? target.value : target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <fieldset className="fieldset">
        <Name value={this.state.name} handleChange={this.handleChange} />
        <Email value={this.state.email} handleChange={this.handleChange} />
        <CPF value={this.state.CPF} handleChange={this.handleChange} />
        <Address value={this.state.address} handleChange={this.handleChange} />
        <City value={this.state.city} handleChange={this.handleChange} />
        <State value={this.state.state} handleChange={this.handleChange} />
        <Type value={this.state.type} handleChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default Form;