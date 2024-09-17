import "./App.css";
import Compteur from "./components/Compteur";

function App() {
	// const handleClick = () => {
	// 	console.log("On a cliqué sur le bouton");
	// };

	// const handleInput = (e) => {
	// 	console.log(e.target.value);
	// };
	return (
		<>
			{/* <button onClick={handleClick}>Cliques moi</button>
			<input type="text" name="coucou" onChange={(e) => handleInput(e)} />
			<input type="text" name="coucou" onChange={handleInput} /> */}
			<Compteur number={2} />
		</>
	);
}

export default App;
