import { useDispatch } from "react-redux";
import { GroceryNew } from "../../@types/grocery";

import { grocerAdd } from "../../store/groceries/groceries.action";
import GroceryForm from "../../components/GroceryForm/GroceryForm";

const GroceryAddForm = () => {
	//composant pour intéragir avec le store redux

	const dispatcher = useDispatch();
	const handleGrocerySubmit = (data: GroceryNew) => {
		const action = grocerAdd(data);
		dispatcher(action);
	};

	return (
		<>
			<h2>Ajouter un produit</h2>
			<GroceryForm onGrocerySubmit={handleGrocerySubmit} />
		</>
	);
};

export default GroceryAddForm;
