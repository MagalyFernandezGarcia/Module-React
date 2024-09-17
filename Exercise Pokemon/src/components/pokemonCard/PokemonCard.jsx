const PokemonType = ({ pokemonType = [] }) => {
	const listOfType = pokemonType.map((type) => <p key={type}>{type}</p>);

	return <div>{listOfType}</div>;
};

const PokemonStats = ({ pokemonStats = {} }) => {
	return (
		<>
			<section>
				<div>
					<p>HP: {pokemonStats.hp}</p>
					<p>Speed: {pokemonStats.speed}</p>
				</div>
				<div>
					<p>Attack: {pokemonStats.attack}</p>
					<p>Defense: {pokemonStats.defense}</p>
				</div>
				<div>
					<p>Special attack: {pokemonStats["special-attack"]}</p>
					<p>Special defense: {pokemonStats["special-defense"]}</p>
				</div>
			</section>
		</>
	);
};

const PokemonCard = ({ pokemonArray = [], type = "" }) => {
	const test = pokemonArray.filter((pokemon) => pokemon.type === type);
	console.log(test);

	const card = () => {
		pokemonArray.map((pokemon) => {
			return (
				<div key={pokemon.id}>
					<img src={pokemon.image} alt={pokemon.name} />
					<p>{pokemon.name}</p>
					<PokemonType pokemonType={pokemon.types} />
					<p>{pokemon.description}</p>
					<PokemonStats pokemonStats={pokemon.stats} />
				</div>
			);
		});
	};
	card();

	return <>{card()}</>;
};

export default PokemonCard;

const FilterPokemon = ({ type = "" }) => {};
