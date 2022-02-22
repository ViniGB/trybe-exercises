import React from "react";

class Type extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
          <input
            type='radio'
            name= 'type'
            value='Casa'
            onChange={handleChange}
            required
          />
          Casa
        </label>
        <label>
          <input
            type='radio'
            name= 'type'
            value='Apartamento'
            onChange={handleChange}
            required
          />
          Apartamento
        </label>
      </div>
    )
  }
}

export default Type;