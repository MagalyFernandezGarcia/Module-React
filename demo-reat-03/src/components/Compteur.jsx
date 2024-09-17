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

// correction

const CompteurCorr = ({ increment = 1 }) => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount((prevValue) => prevValue + increment);
	};

	const handleReset = () => {
		setCount(0);
	};

	return (
		<>
			<p>{count}</p>
			<button onClick={handleIncrement}>+ {increment}</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
};
