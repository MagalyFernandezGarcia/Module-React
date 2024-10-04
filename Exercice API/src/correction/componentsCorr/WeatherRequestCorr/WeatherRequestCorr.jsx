import { useEffect, useState } from "react";
import { getWeatherFromCity } from "../../services/weatherServices";
import SpinnerCorr from "../SpinnerCorr/SpinnerCorr";
import { formatToCelsius } from "../../tools/formatter.tools";

const WeatherRequestCorr = (
	city,
	onAction = () => {},
	btnAction = undefined
) => {
	const [result, setResult] = useState({
		isLoading: false,
		data: null,
		error: null,
	});

	const handleClick = () => {
		onAction(result.data.city);
	};
	useEffect(() => {
		setResult({
			isLoading: true,
			data: null,
			error: null,
		});
		getWeatherFromCity(city)
			.then((data) => {
				setResult({
					isLoading: false,
					data,
					error: null,
				});
			})
			.catch((error) =>
				setResult({
					isLoading: false,
					data: null,
					error: error?.message ?? "Erreur...",
				})
			);
	}, [city]);

	return (
		<>
			{result.isLoading ? (
				<SpinnerCorr />
			) : result.data ? (
				<>
					<WeatherResult {...result.data} />{" "}
					{btnAction && (
						<button type="button" onClick={handleClick}>
							{btnAction}
						</button>
					)}
				</>
			) : (
				<WeatherError message={result.error} />
			)}
		</>
	);
};

const WeatherResult = ({
	city,
	country,
	temp,
	tempFeels,
	description,
	icon,
}) => {
	return (
		<div>
			<p>
				{city} {country}
			</p>
			<p>
				Température : {formatToCelsius(temp)} ({formatToCelsius(tempFeels)})
			</p>
			<p>Description : {description}</p>
			<img src={icon} alt="" />
		</div>
	);
};

const WeatherError = ({ message }) => {
	return (
		<div>
			<p>Erreur : {message}</p>
		</div>
	);
};

export default WeatherRequestCorr;
