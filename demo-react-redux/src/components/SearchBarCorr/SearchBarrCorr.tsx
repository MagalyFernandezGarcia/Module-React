import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
	valueSearch: string;
};

type SearchBarProps = {
	placeHolder?: string;
	onSearchCorr: (query: string) => void;
};

const validationSchema = z.object({
	valueSearch: z.string().min(1, { message: "Minimum une lettre" }).trim(),
});

const SearchBarrCorr = ({
	placeHolder = "",
	onSearchCorr = () => {},
}: SearchBarProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		reset,
	} = useForm({
		defaultValues: { valueSearch: "" },
		resolver: zodResolver(validationSchema),
	});

	const handleSearchSubmit = (data: FormData) => {
		onSearchCorr(data.valueSearch);
		setFocus("valueSearch");
		reset();
	};
	return (
		<form onSubmit={handleSubmit(handleSearchSubmit)}>
			<input
				type="text"
				placeholder={placeHolder}
				aria-label="Champs de recherche"
				{...register("valueSearch")}
			/>
			{errors.valueSearch && <span>{errors.valueSearch.message}</span>}
			<button type="submit">Rechercher</button>
		</form>
	);
};

export default SearchBarrCorr;