import { useId, useState } from "react";
import { GroceryNew } from "../@types/grocery";

export type GroceryFormProps = {
	onGrocerySubmit: (grocery: GroceryNew) => void;
};

const GroceryForm = ({ onGrocerySubmit }: GroceryFormProps) => {
	const inputId = useId();
	const [name, setName] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onGrocerySubmit({
			name,
			quantity: parseInt(quantity),
		});
		setName("");
		setQuantity("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor={inputId + "name"}>Nom :</label>
				<input
					type="text"
					id={inputId + "name"}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor={inputId + "qte"}>Quantité :</label>{" "}
				<input
					type="text"
					id={inputId + "qte"}
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
			</div>
			<div>
				<button type="submit">Valider</button>
			</div>
		</form>
	);
};

export default GroceryForm;
