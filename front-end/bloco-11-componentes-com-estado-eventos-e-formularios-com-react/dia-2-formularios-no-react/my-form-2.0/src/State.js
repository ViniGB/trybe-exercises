import React from "react";
import states from "./states";

class State extends React.Component {
  render() {
    const { value, handleChange } = this.props
    const stateKeys = Object.keys(states);
    const stateValues = Object.values(states);

    return (
      <label>
       State
        <select
          value={value}
          name= 'state'
          onChange={handleChange}
          required
        >
          <option>Select a state</option> {stateValues.map((state, index) => 
            <option value={stateKeys[index]} key={state}>{state}</option>
          )}
        </select>
      </label>
    )
  }
}

export default State;