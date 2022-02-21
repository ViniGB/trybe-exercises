import React from "react";
// import PropTypes from 'prop-types';
import './GetPokemon.css'
import pokemons from "./data";

class GetPokemon extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPokemon: 0
    }
    this.newPokemon = this.newPokemon.bind(this);
  }

  newPokemon = () => {
    if (this.state.currentPokemon < pokemons.length - 1) {
      this.setState((previousPokemon) => ({
        currentPokemon: previousPokemon.currentPokemon + 1
      }))
    } else {
      this.setState({
        currentPokemon: 0
      })
    }
  }

  render() {
    return (
      <div className="pokemon-grandfather">
        <div className="pokemon-father pokemon">
          <div className="pokemon-description">
            <p>{ pokemons[this.state.currentPokemon].name }</p>
            <p>{ pokemons[this.state.currentPokemon].type }</p>
            <p>Average weight:
              { pokemons[this.state.currentPokemon].averageWeight.value } 
              { pokemons[this.state.currentPokemon].averageWeight.measurementUnit }</p>
          </div>
          <div className="pokemon-img">
            <img src={ pokemons[this.state.currentPokemon].image } alt='Pokemon Card'/>
          </div>
        </div>
          <button className="pokemon-button" onClick={this.newPokemon}>New Pokemon</button>
      </div>
      
    )
  }
}

// GetPokemon.propTypes = {
//   pokemon: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     type: PropTypes.string,
//     averageWeight: PropTypes.shape({
//       value: PropTypes.number,
//       measurementUnit: PropTypes.string,
//     }),
//     image: PropTypes.string,
//   }).isRequired,
// }

export default GetPokemon;
