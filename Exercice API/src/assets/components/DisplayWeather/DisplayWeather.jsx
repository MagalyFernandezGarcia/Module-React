import { useEffect, useState } from "react";

const DisplayWeather = ({ dataWeather }) => {
	console.log("data weather ", dataWeather);
	// const [citySearched, setCitySearched] = useState([dataWeather]);

	// useEffect(() => {
	// 	setCitySearched((oldCity) => [...oldCity, dataWeather]);
	// 	console.log("test ", citySearched);
	// }, [dataWeather]);

	return (
		<>
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
			{/* <section>
				{citySearched.forEach((town) => {
					return (
						<div>
							<p>Ville : {town.name}</p>
						</div>
					);
				})}
			</section> */}
		</>
	);
};

export default DisplayWeather;
