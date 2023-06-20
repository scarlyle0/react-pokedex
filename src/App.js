import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios"

function App() {
  const [pokemontypevalue, setpokemontypevalue] = useState("n")
  const [pokemontypevaluetwo, setpokemontypevaluetwo] = useState("n")
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
    if (pokemonType === 'normal')
    setpokemontypevalue('divTableCellnormal')
    if (pokemonType === 'fire')
    setpokemontypevalue('divTableCellfire')
    if (pokemonType === 'water')
    setpokemontypevalue('divTableCellwater')
    if (pokemonType === 'grass')
    setpokemontypevalue('divTableCellgrass')
    if (pokemonType === 'electric')
    setpokemontypevalue('divTableCellelectric')
    if (pokemonType === 'ice')
    setpokemontypevalue('divTableCellice')
    if (pokemonType === 'fighting')
    setpokemontypevalue('divTableCellfighting')
    if (pokemonType === 'poison')
    setpokemontypevalue('divTableCellpoison')
    if (pokemonType === 'ground')
    setpokemontypevalue('divTableCellground')
    if (pokemonType === 'flying')
    setpokemontypevalue('divTableCellflying')
    if (pokemonType === 'psychic')
    setpokemontypevalue('divTableCellpsychic')
    if (pokemonType === 'bug')
    setpokemontypevalue('divTableCellbug')
    if (pokemonType === 'rock')
    setpokemontypevalue('divTableCellrock')
    if (pokemonType === 'ghost')
    setpokemontypevalue('divTableCellghost')
    if (pokemonType === 'dark')
    setpokemontypevalue('divTableCelldark')
    if (pokemonType === 'dragon')
    setpokemontypevalue('divTableCelldragon')
    if (pokemonType === 'steel')
    setpokemontypevalue('divTableCellsteel')
    if (pokemonType === 'fairy')
    setpokemontypevalue('divTableCellfairy')

    if (pokemonTypeTwo === 'None')
    setpokemontypevaluetwo('divTableCellNone')
    if (pokemonTypeTwo === 'normal')
    setpokemontypevaluetwo('divTableCellnormal')
    if (pokemonTypeTwo === 'fire')
    setpokemontypevaluetwo('divTableCellfire')
    if (pokemonTypeTwo === 'water')
    setpokemontypevaluetwo('divTableCellwater')
    if (pokemonTypeTwo === 'grass')
    setpokemontypevaluetwo('divTableCellgrass')
    if (pokemonTypeTwo === 'electric')
    setpokemontypevaluetwo('divTableCellelectric')
    if (pokemonTypeTwo === 'ice')
    setpokemontypevaluetwo('divTableCellice')
    if (pokemonTypeTwo === 'fighting')
    setpokemontypevaluetwo('divTableCellfighting')
    if (pokemonTypeTwo === 'poison')
    setpokemontypevaluetwo('divTableCellpoison')
    if (pokemonTypeTwo === 'ground')
    setpokemontypevaluetwo('divTableCellground')
    if (pokemonTypeTwo === 'flying')
    setpokemontypevaluetwo('divTableCellflying')
    if (pokemonTypeTwo === 'psychic')
    setpokemontypevaluetwo('divTableCellpsychic')
    if (pokemonTypeTwo === 'bug')
    setpokemontypevaluetwo('divTableCellbug')
    if (pokemonTypeTwo === 'rock')
    setpokemontypevaluetwo('divTableCellrock')
    if (pokemonTypeTwo === 'ghost')
    setpokemontypevaluetwo('divTableCellghost')
    if (pokemonTypeTwo === 'dark')
    setpokemontypevaluetwo('divTableCelldark')
    if (pokemonTypeTwo === 'dragon')
    setpokemontypevaluetwo('divTableCelldragon')
    if (pokemonTypeTwo === 'steel')
    setpokemontypevaluetwo('divTableCellsteel')
    if (pokemonTypeTwo === 'fairy')
    setpokemontypevaluetwo('divTableCellfairy')
    
  }, [pokemonType, pokemonTypeTwo])


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


            <div className='rowone'>


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
                    <div className={pokemontypevaluetwo}>{pokemonTypeTwo.charAt(0).toUpperCase() + pokemonTypeTwo.slice(1)}</div>
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
                </div>
              </div>


              <div className='divTable'>
                <div className='divTableBody'>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Base Stat Total</div>
                    <div className='divTableCell'>{data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat}</div>
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>HP</div>
                    <div className='divTableCell'>{data.stats[0].base_stat}</div>
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Attack</div>
                    <div className='divTableCell'>{data.stats[1].base_stat}</div> 
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Defense</div>
                    <div className='divTableCell'>{data.stats[2].base_stat}</div>
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Sp. Attack</div>
                    <div className='divTableCell'>{data.stats[3].base_stat}</div>
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Sp. Defense</div>
                    <div className='divTableCell'>{data.stats[4].base_stat}</div>
                  </div>
                  <div className='divTableRow'>
                    <div className='divTableCell'>Speed</div>
                    <div className='divTableCell'>{data.stats[5].base_stat}</div>
                  </div>
                </div>
              </div>


            </div>


            <div className='rowtwo'>



            </div>


          </div>
        )
      })}
    </div>
  );
}

export default App;