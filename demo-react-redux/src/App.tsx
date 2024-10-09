import { Outlet } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home/HomePage";
import NavBar from "./containers/NavBar/NavBar";
import Header from "./containers/Header/Header";

function App() {
	return (
		<>
			<Header />
			<NavBar />
			{/**composant qui permet d'afficher les enfants */}
			<Outlet />
		</>
	);
}

export default App;
