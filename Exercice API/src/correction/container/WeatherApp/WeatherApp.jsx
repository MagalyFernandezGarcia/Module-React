import { useState } from "react";
import SearchBarrCorr from "../../componentsCorr/SearchBarCorr/SearchBarrCorr";
import WeatherRequestCorr from "../../componentsCorr/WeatherRequestCorr/WeatherRequestCorr";

const WeatherApp = () => {
	const [currentCity, setCurrentCity] = useState(null);
	const [savedCities, setSavedCities] = useState([]);

	const handleCitySearch = (city) => {
		setCurrentCity(city);
	};
	const handleSaveWeather = (cityToSave) => {
		if (!savedCities.includes(cityToSave)) {
			setSavedCities((cities) => [cityToSave, ...cities]);
		}
	};

	const handleDeleteWeather = (cityToDelete) => {
		setSavedCities((cities) => cities.filter(city !== cityToDelete));
	};
	return (
		<>
			<h1>Application de météo</h1>
			<h2>Rechercher une ville</h2>
			<SearchBarrCorr placeHolder="Bruxelles" onSearchCorr={handleCitySearch} />
			<h2>Resultat</h2>
			{currentCity && (
				<WeatherRequestCorr
					city={currentCity}
					btnAction="😍"
					onAction={handleSaveWeather}
				/>
			)}
			<h2>les villes favorites</h2>
			{savedCities.map((city) => {
				<WeatherRequestCorr
					city={city}
					key={city}
					btnAction="🐼"
					onAction={handleDeleteWeather}
				/>;
			})}
		</>
	);
};

export default WeatherApp;
