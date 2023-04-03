import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios"

function App() {
  const [ID, setID] = useState("None")
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonTypeTwo, setPokemonTypeTwo] = useState("None");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; 
      const res = await axios.get(url); // Grab const from URL
      toArray.push(res.data)
      setID("#" + res.data.id)
      setPokemonType(res.data.types[0].type.name) // Set type of pokemon
      setPokemonTypeTwo(res.data.types[1]?.type.name ?? "None") // Set type of pokemon if undefined set none
      setPokemonData(toArray)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon();
  }

  return (
    <div className="App">
      <form onSubmit ={handleSubmit}>
        <label>
          <input type ="text" onChange={handleChange} placeholder= "Enter Pokemon Name">
          </input>
        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className='container'>
            <img src={data.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="Pokemon"/>
            <img src={data.sprites.versions["generation-v"]["black-white"].animated.front_shiny} alt="Pokemon"/>
            <div className='divTable'>
              <div className='divTableBody'>
                <div className='divTableRow'>
                  <div className='divTableCell'>ID</div>
                  <div className='divTableCell'>{ID}</div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Type</div>
                  <div className='divTableCell'>{pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}</div>
                  <div className='divTableCell'>{pokemonTypeTwo.charAt(0).toUpperCase() + pokemonTypeTwo.slice(1)}</div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Height</div>
                  <div className='divTableCell'>{" "}{Math.round(data.height * 3.9)}"</div> 
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Weight</div>
                  <div className='divTableCell'>{" "}{Math.round(data.weight / 4.3)} lbs</div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Yo</div>
                  <div className='divTableCell'>{data.game_indices.length}</div>
              </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;