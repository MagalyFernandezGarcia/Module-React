import { useState } from "react";
import "./App.css";
import ButtonsType from "./components/buttonsType/ButtonsType";

import PokemonCard from "./components/pokemonCard/PokemonCard";
import pokemonJSON from "./datas/Pokemon-data.json";

function App() {
	const [selectedType, setSelectedType] = useState("");
	console.log(selectedType);

	return (
		<>
			<ButtonsType pokemons={pokemonJSON} stateType={setSelectedType} />
			<PokemonCard pokemonArray={pokemonJSON} type={selectedType} />
		</>
	);
}

export default App;
