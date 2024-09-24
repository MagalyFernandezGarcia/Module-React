import { useState } from "react";
import AnimalList from "../../components/AnimalList/AnimalList";
import animalsJSON from "../Animal/data/animals.json";
import SearchBar from "../../components/SearchBar/SearchBar";

const Animal = () => {
	const [animals, setAnimals] = useState(animalsJSON);
	const [nameFilter, setNameFilter] = useState("");
	const handleSearch = (data) => {
		setNameFilter(data);
	};

	const handleClear = () => {
		setNameFilter("");
	};

	const animalDisplay = animals.filter((a) =>
		a.name.toLowerCase().includes(nameFilter.toLowerCase())
	);

	const handleDelete = (id) => {
		setAnimals((animals) => animals.filter((a) => a.id !== id));
	};

	return (
		<div>
			<SearchBar btnSubmit="🔍" onSearch={handleSearch} />
			{nameFilter !== "" && (
				<p>
					Filtre en cours : {nameFilter} <span onClick={handleClear}>🗑️</span>
				</p>
			)}
			<AnimalList animals={animalDisplay} onAnimalDelete={handleDelete} />
		</div>
	);
};

export default Animal;
