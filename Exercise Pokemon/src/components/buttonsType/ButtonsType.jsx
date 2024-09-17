const ButtonsType = ({ pokemons = [], stateType }) => {
	const typeArray = [];
	const filterTypes = () => {
		pokemons.map((pokemon) => {
			pokemon.types.forEach((type) => {
				if (!typeArray.includes(type)) {
					typeArray.push(type);
				}
			});
			return typeArray;
		});
	};
	filterTypes();

	const buttons = typeArray.map((type) => {
		return (
			<button
				onClick={() => {
					stateType(type);
				}}
			>
				{type}
			</button>
		);
	});

	return <section>{buttons}</section>;
};

export default ButtonsType;
