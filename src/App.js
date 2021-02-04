import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import Cards from './components/Cards'
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    let url = ` https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [pokemon]);

  function getPokemon(poke) {
    setPokemon(poke);
  }

  return (
    <div className="App">
      <h1>Pokemon app</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="logo-pokemon"/>
    <SearchInput getPokemon={getPokemon} />
    <Cards data={data}/>
    </div>
  );
}

export default App;
