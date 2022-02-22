import React from "react";

class City extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
       City
        <input
          type='text'
          name= 'city'
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default City;