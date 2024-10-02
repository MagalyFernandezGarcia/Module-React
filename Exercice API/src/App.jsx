import { useState } from "react";
import "./App.css";
import Search from "./assets/components/Search/Search";
import WeatherRequest from "./assets/components/WeatherRequest/WeatherRequest";

function App() {
	const [city, setCity] = useState(null);
	const [arrayCities, setArrayCities] = useState([]);
	const handleCityResearch = (city) => {
		setCity(city);
		setArrayCities((oldCity) => [city, ...oldCity]);
	};

	return (
		<>
			<Search
				onSearch={handleCityResearch}
				placeHolder="Rechercher une ville"
			/>
			{/* {city && <WeatherRequest city={city} />} */}
			{/* <hr /> */}

			{arrayCities.map((town) => {
				return <WeatherRequest city={town} key={town} />;
			})}
		</>
	);
}

export default App;
