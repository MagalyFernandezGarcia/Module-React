import style from "./listOfPokemon.module.css";

const ListOfPokemon = ({ arrayOfPokemon }) => {
	const list = arrayOfPokemon.map((pokemon) => {
		return (
			<button className={style["nameBtn"]} key={pokemon.id}>
				{pokemon.name}
			</button>
		);
	});

	return (
		<>
			<section className={style["namesContainer"]}>{list}</section>
		</>
	);
};

export default ListOfPokemon;
