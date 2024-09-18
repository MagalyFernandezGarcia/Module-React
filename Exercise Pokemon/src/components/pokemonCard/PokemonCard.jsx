import "./pokemonCard.css";

const PokemonType = ({ pokemonType = [] }) => {
	const listOfType = pokemonType.map((type) => {
		const className = `typeCard ${type}`;
		return (
			<p className={className} key={type}>
				{type}
			</p>
		);
	});

	return <div className="typeContainer">{listOfType}</div>;
};

const PokemonStats = ({ pokemonStats = {} }) => {
	return (
		<>
			<section className="statsContainer">
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
	return (
		<main className="main">
			{type === "" ? (
				<Card pokemonArray={pokemonArray} />
			) : (
				<FilterPokemon pokemonArray={pokemonArray} type={type} />
			)}
		</main>
	);
};

export default PokemonCard;

const Card = ({ pokemonArray = [] }) => {
	return (
		<>
			{pokemonArray.map((pokemon) => {
				return (
					<div className="card" key={pokemon.id}>
						<img src={pokemon.image} alt={pokemon.name} className="icon" />
						<h3>{pokemon.name}</h3>
						<PokemonType pokemonType={pokemon.types} />
						<p>{pokemon.description}</p>
						<PokemonStats pokemonStats={pokemon.stats} />
					</div>
				);
			})}
		</>
	);
};

const FilterPokemon = ({ pokemonArray = [], type = "" }) => {
	const filteredArray = [];

	pokemonArray.filter((pokemon) => {
		if (type != "") {
			pokemon.types.some((typePkmn) => {
				if (typePkmn === type) {
					filteredArray.push(pokemon);
				}
			});
		}
	});
	return <Card pokemonArray={filteredArray} />;
};
