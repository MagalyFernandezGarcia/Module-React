import "./buttonType.css";

const ButtonsType = ({ pokemons = [], stateType }) => {
	const typeArray = [];
	const filterTypes = () => {
		pokemons.map((pokemon) => {
			pokemon.types.map((type) => {
				if (!typeArray.includes(type)) {
					typeArray.push(type);
				}
			});
			return typeArray;
		});
	};
	filterTypes();

	const buttons = typeArray.map((type) => {
		const className = `btn ${type}`;
		return (
			<button
				className={className}
				key={type}
				onClick={() => {
					stateType(type);
				}}
			>
				{type}
			</button>
		);
	});

	return <section className="btnContainer">{buttons}</section>;
};

export default ButtonsType;
