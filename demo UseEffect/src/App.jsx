import "./App.css";
import Clock from "./components/Clock/CLock";
import DateOfDay from "./components/DateOfDay/DateOfDay";

function App() {
	return (
		<>
			<header>
				<h1>Exercice 06</h1>
			</header>
			<main>
				<DateOfDay />
				<Clock />
			</main>
		</>
	);
}

export default App;
