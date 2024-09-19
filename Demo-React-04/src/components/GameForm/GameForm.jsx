import { useState } from "react";
import { useId } from "react";

const defaultDataForm = { gameName: "", advice: "N/A", comment: "" };

const GameForm = () => {
	const inputId = useId();

	const [dataForm, setDataForm] = useState(defaultDataForm);

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;

		setDataForm((data) => ({
			...data,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Le jeu est: ${dataForm.gameName} ${dataForm.advice}`);
		handleReset();
	};
	const handleReset = () => {
		setDataForm(defaultDataForm);
	};

	return (
		<>
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<div>
					<label htmlFor={inputId + "name"}>Nom:</label>
					<input
						type="text"
						id={inputId + "name"}
						name="gameName"
						value={dataForm.gameName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="recommanded">
						Avis:
						<input
							type="radio"
							id={inputId + "radio-yes"}
							name="advice"
							value={"Yes"}
							onChange={handleChange}
							checked={dataForm.advice === "Yes"}
						/>
						<label htmlFor={inputId + "radio-yes"}>Oui</label>
						<input
							type="radio"
							id={inputId + "radio-no"}
							name="advice"
							value={"No"}
							onChange={handleChange}
							checked={dataForm.advice === "No"}
						/>
						<label htmlFor={inputId + "radio-no"}>Non</label>
						<input
							type="radio"
							id={inputId + "radio-na"}
							name="advice"
							value={"N/A"}
							onChange={handleChange}
							checked={dataForm.advice === "N/A"}
						/>
						<label htmlFor={inputId + "radio-na"}>N/A</label>
					</label>
				</div>
				<div>
					<label htmlFor={inputId + "comment"}>Commentaire</label>
					<textarea
						name="comment"
						id={inputId + "comment"}
						onChange={handleChange}
						value={dataForm.comment}
					/>
				</div>
				<div>
					<button type="submit">Valider</button>
					<button type="reset">Effacer</button>
				</div>
			</form>
		</>
	);
};

export default GameForm;
