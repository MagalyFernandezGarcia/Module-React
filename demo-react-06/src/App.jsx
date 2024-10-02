import { useState } from "react";
import "./App.css";
import CatBreedForm from "./components/CatBreedForm/CatBreedForm";
import CatRequest from "./components/CatRequest/CatRequest";

function App() {
	const [catBreeds, setCatBreeds] = useState(null);
	const handleCatSearch = (breed) => {
		setCatBreeds(breed);
	};

	return (
		<>
			<h1>Demo requête Ajax</h1>
			<CatBreedForm onSearch={handleCatSearch} />
			{catBreeds && <CatRequest breed={catBreeds} />}
		</>
	);
}

export default App;
