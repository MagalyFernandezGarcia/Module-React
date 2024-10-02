import { useForm } from "react-hook-form";
import { useId } from "react";

const Search = ({ onSearch = () => {}, placeHolder = "Rechercher" }) => {
	const inputId = useId();
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			query: "",
		},
	});

	const handleSearchSubmit = (data) => {
		onSearch(data.query);
		reset();
	};
	return (
		<form onSubmit={handleSubmit(handleSearchSubmit)}>
			<label htmlFor={inputId}></label>
			<input
				type="text"
				id={inputId}
				{...register("query")}
				placeholder={placeHolder}
			/>
			<button type="submit">Rechercher</button>
		</form>
	);
};

export default Search;
