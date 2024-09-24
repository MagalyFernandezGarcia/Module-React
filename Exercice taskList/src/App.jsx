import "./App.css";
import Task from "./components/Task/Task";
import Header from "./containers/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<Task />
			</main>
		</>
	);
}

export default App;
