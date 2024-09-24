import { useId, useRef, useState } from "react";

const SearchBar = ({
	label = "Rechercher",
	btnSubmit = "Valider",
	clearOnSubmit = true,
	onSearch = (data) => {},
}) => {
	const inputId = useId();
	const [query, setQuery] = useState("");
	const inputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (clearOnSubmit) {
			setQuery("");
		}
		inputRef.current.focus(); //permet de revenir en focus sur la barre après avoir valider
		onSearch(query);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={inputId}>{label} : </label>
			<input
				ref={inputRef}
				type="text"
				id={inputId}
				required
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button type="submit">{btnSubmit}</button>
		</form>
	);
};

export default SearchBar;
