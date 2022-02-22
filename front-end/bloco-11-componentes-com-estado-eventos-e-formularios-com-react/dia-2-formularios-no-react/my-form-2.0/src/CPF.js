import React from "react";

class CPF extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
       CPF
        <input
          type='text'
          name= 'CPF'
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default CPF;