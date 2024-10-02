const DisplayWeather = ({ dataWeather }) => {
	console.log("data weather ", dataWeather);

	return (
		<section>
			<p>Ville : {dataWeather.name}</p>
			<img
				src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`}
				alt=""
			/>
			<p>
				Températures : min {dataWeather.main.temp_min}°C, max{" "}
				{dataWeather.main.temp_max}°C
			</p>
		</section>
	);
};

export default DisplayWeather;
