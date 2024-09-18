import pokemonJSON from "../../../datas/Pokemon-data.json";
import { useState } from "react";
import PokeList from "../PokeList/PokeList";
import "./pokedex.css";

const Pokedex = () => {
	const [selectedPokemon, setSelectedPokemon] = useState(pokemonJSON);

	const types = [...new Set(pokemonJSON.flatMap((pokemon) => pokemon.types))];

	const handleSort = (e) => {
		const filter = e.target.value;
		if (filter === "all") {
			setSelectedPokemon(pokemonJSON);
		} else {
			let selectedType = pokemonJSON.filter((pokemon) =>
				pokemon.types.includes(filter)
			);
			setSelectedPokemon(selectedType);
		}
	};

	const buttons = types.map((type) => (
		<button
			className="filter-button"
			key={type}
			onClick={handleSort}
			value={type}
		>
			{type}
		</button>
	));

	return (
		<div className="pokedex-container">
			<div className="filter-buttons-container">
				<button className="filter-button" onClick={handleSort} value={"all"}>
					All
				</button>
				{buttons}
			</div>
			<div className="pokemon-grid">
				{selectedPokemon.map((poke) => (
					<PokeList key={poke.id} pokemon={poke} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
