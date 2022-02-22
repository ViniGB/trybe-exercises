import React from "react";

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
        Nome
        <input
          type='text'
          name='name'
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default Name;