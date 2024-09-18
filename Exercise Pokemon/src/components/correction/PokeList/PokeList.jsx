import { useState } from "react";
import PokeDetails from "../pokeDetails/PokeDetails";

const PokeList = ({ pokemon }) => {
	const [showDetails, setShowDetails] = useState(false);
	const { name, image, ...détails } = pokemon;
	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};
	return (
		<div>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<button onClick={toggleDetails}>
				{showDetails ? "cacher détails" : "Afficher détails"}
			</button>
			{showDetails && (
				<div>
					<PokeDetails pokemon={détails} />
				</div>
			)}
		</div>
	);
};

export default PokeList;
