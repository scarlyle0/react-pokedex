import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios"

function App() {
  const [pokemontypevalue, setpokemontypevalue] = useState("n")
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
      if (String(res.data.id).length === 1)
      {
        setID("#000" + res.data.id)
      } else if (String(res.data.id).length === 2){
        setID("#00" + res.data.id)
      } else if (String(res.data.id).length === 3){
        setID("#0" + res.data.id)
      } else {
        setID("#" + res.data.id)
      }
      // Set type of pokemon
      setPokemonType(res.data.types[0].type.name)
      setPokemonTypeTwo(res.data.types[1]?.type.name ?? "None")
      setPokemonData(toArray)
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

  useEffect(() => {
    if (pokemonType === 'poison')
    setpokemontypevalue('divTableCellpoison')
  }, [pokemonType])


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
                  <div className='divTableCell'></div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Type</div>
                  <div className={pokemontypevalue}>{pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}</div>
                  <div className='divTableCell'>{pokemonTypeTwo.charAt(0).toUpperCase() + pokemonTypeTwo.slice(1)}</div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Height</div>
                  <div className='divTableCell'>{" "}{Math.round(data.height * 3.9)}"</div> 
                  <div className='divTableCell'></div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Weight</div>
                  <div className='divTableCell'>{" "}{Math.round(data.weight / 4.3)} lbs</div>
                  <div className='divTableCell'></div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Yo</div>
                  <div className='divTableCell'>{data.game_indices.length}</div>
                  <div className='divTableCell'></div>
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