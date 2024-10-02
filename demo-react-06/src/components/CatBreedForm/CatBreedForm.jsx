import { useForm } from "react-hook-form";
import { useId } from "react";

const CatBreedForm = ({ onSearch = () => {} }) => {
	const inputId = useId();
	const { register, handleSubmit, reset, setFocus } = useForm({
		defaultValues: {
			query: "",
		},
	});

	const handleCatBreedSubmit = (data) => {
		console.log("catBreedSubmit", data);
		onSearch(data.query);
		setFocus("query"); //mettre le focus avant le reset sinon il ne marche pas
		reset();
	};
	return (
		<form onSubmit={handleSubmit(handleCatBreedSubmit)}>
			<label htmlFor={inputId}>Race de chat recherchée : </label>
			<input type="text" {...register("query")} id={inputId} />
			<button type="submit">Rechercher</button>
		</form>
	);
};

export default CatBreedForm;
