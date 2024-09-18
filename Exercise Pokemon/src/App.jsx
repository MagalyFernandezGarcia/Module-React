import { useState } from "react";
import "./App.css";
import ButtonsType from "./components/buttonsType/ButtonsType";

import PokemonCard from "./components/pokemonCard/PokemonCard";
import pokemonJSON from "./datas/Pokemon-data.json";
import Pokedex from "./components/correction/pokedex/Pokedex";

function App() {
	const [selectedType, setSelectedType] = useState("");

	return (
		<>
			<ButtonsType pokemons={pokemonJSON} stateType={setSelectedType} />
			<PokemonCard pokemonArray={pokemonJSON} type={selectedType} />
			{/* <Pokedex /> */}
		</>
	);
}

export default App;
