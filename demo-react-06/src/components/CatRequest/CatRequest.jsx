import { useEffect, useState } from "react";
import axios from "axios";

const CatRequest = ({ breed }) => {
	const [dataRequest, setDataRequest] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		//Avant de lancer la requête Ajax =>set des valeurs par défaut
		setLoading(true);
		setDataRequest(null);
		setError(null);

		//Requête Ajax via axios

		axios
			.get("https://api.thecatapi.com/v1/images/search", {
				params: {
					breed_id: breed,
					has_breeds: true,
					api_key: import.meta.env.VITE_CAT_API_KEY,
				},
			})
			.then(({ data }) => {
				console.log(data);
				if (data.length >= 1) {
					setDataRequest(data[0]);
				} else {
					setError("Pas de chat");
				}

				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, [breed]);

	return (
		<>
			{isLoading ? (
				<CatLoading />
			) : dataRequest ? (
				<CatResult data={dataRequest} />
			) : (
				error && <CatError error={error} />
			)}
		</>
	);
};

const CatLoading = () => {
	return <div>Chargement du chat</div>;
};

const CatResult = ({ data }) => {
	return (
		<div>
			<p>Identifiant du chat : {data.id}</p>
			<img src={data.url} alt={"image du chat" + data.id}></img>
		</div>
	);
};
const CatError = ({ error }) => {
	return <div>Erreur : {error}</div>;
};
export default CatRequest;
