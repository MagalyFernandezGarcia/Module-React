import "./App.css";
import Animal from "./containers/Animal/Animal";
import Header from "./containers/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<h1>Demo Communication</h1>
				<Animal />
			</main>
		</>
	);
}

export default App;
