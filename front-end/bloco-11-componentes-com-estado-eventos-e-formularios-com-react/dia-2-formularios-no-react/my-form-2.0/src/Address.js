import React from "react";

class Address extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
       Address
        <input
          type='text'
          name= 'address'
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default Address;