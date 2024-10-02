import { useState } from "react";
import "./App.css";
import Search from "./assets/components/Search/Search";
import WeatherRequest from "./assets/components/WeatherRequest/WeatherRequest";

function App() {
	const [city, setCity] = useState(null);
	const handleCityResearch = (city) => {
		setCity(city);
	};

	return (
		<>
			<Search
				onSearch={handleCityResearch}
				placeHolder="Rechercher une ville"
			/>
			{city && <WeatherRequest city={city} />}
		</>
	);
}

export default App;
