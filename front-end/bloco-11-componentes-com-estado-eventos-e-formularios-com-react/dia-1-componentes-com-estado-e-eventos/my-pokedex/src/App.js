import './App.css';
import GetPokemon from './GetPokemon';
import pokemons from './data';
import './GetPokemon.css'

function App() {
  return (
    // pokemons.map((pokemon) => (
    //   <div key={pokemon.id} className='pokemon-master'>
    //     <GetPokemon pokemon={ pokemon }/>
    //   </div>
  // )));
    <GetPokemon />
  )
}

export default App;
