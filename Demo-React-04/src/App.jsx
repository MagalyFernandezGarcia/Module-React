import "./App.css";
import GameForm from "./components/GameForm/GameForm";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

function App() {
	return (
		<>
			<Header />

			<main>
				<h1>Mes jeux</h1>
				<GameForm />
			</main>
			<Footer />
		</>
	);
}

export default App;
