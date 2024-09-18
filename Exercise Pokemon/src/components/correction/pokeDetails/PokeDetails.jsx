const PokeDetails = ({ pokemon }) => {
	const stats = { ...pokemon.stats };
	const types = pokemon.types.map((type) => (
		<li>
			<p>{type}</p>
		</li>
	));

	const desc = pokemon.description.replace("\f", " ");
	return (
		<div>
			<h4>Description</h4>
			<p>{desc}</p>
			<ul>
				<h4></h4>

				<li>Attack : {stats.attack}</li>
				<li>Defense : {stats.defense}</li>
				<li>HP : {stats.hp}</li>
				<li>Special Attack : {stats["special-attack"]}</li>
				<li>Special Defense : {stats["special-defense"]}</li>
				<li>Vitesse : {stats.vitesse}</li>
			</ul>
			<h4>Types(s)</h4>
			<ul>{types}</ul>
		</div>
	);
};

export default PokeDetails;
