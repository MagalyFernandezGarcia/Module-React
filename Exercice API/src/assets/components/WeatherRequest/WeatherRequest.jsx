import { useEffect, useState } from "react";
import axios from "axios";
import DisplayWeather from "../DisplayWeather/DisplayWeather";
import Spinner from "../../containers/Spinner/Spinner";

const WeatherRequest = ({ city }) => {
	const [dataRequest, setDataRequest] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setDataRequest(null);
		setError(null);

		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
					import.meta.env.VITE_OPEN_WEATHER_API
				}&units=metric&lang=fr`
			)
			.then(({ data }) => {
				setDataRequest(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, [city]);

	return (
		<>
			{isLoading ? (
				<Spinner loading={isLoading} />
			) : error ? (
				<ErrorHappend />
			) : (
				dataRequest && <DisplayWeather dataWeather={dataRequest} />
			)}
		</>
	);
};

const ErrorHappend = () => {
	return <p>Oups, something went wrong! {error}</p>;
};

const LoadingSpinner = () => {
	return <div>Wait</div>;
};

export default WeatherRequest;
