import { useState } from "react";

const Compteur = ({ number = 1 }) => {
	const [count, setCount] = useState(0);
	const addToCount = () => {
		setCount(count + number);
		console.log(count);
	};

	return (
		<>
			<p>LE paragraphe</p>
			<button onClick={addToCount}>Ajoute au nombre</button>
			{count === 0 ? null : (
				<button
					onClick={() => {
						setCount(0);
					}}
				>
					Reset
				</button>
			)}
		</>
	);
};

export default Compteur;
