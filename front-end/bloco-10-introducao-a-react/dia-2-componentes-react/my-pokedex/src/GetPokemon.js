import React from "react";
import PropTypes from 'prop-types';
import './GetPokemon.css'

class GetPokemon extends React.Component {
  render() {
    return (
      <div className="pokemon-father pokemon">
        <div className="pokemon-description">
          <p>{ this.props.pokemon.name }</p>
          <p>{ this.props.pokemon.type }</p>
          <p>Average weight: { this.props.pokemon.averageWeight.value } { this.props.pokemon.averageWeight.measurementUnit }</p>
        </div>
        <div className="pokemon-img">
          <img src={ this.props.pokemon.image } alt='Pokemon Card'/>
        </div>
      </div>
    )
  }
}

GetPokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default GetPokemon;
