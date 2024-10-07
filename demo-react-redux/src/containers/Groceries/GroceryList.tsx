import { useDispatch, useSelector } from "react-redux";
import { StateStore } from "../../store/store";
import { Grocery } from "../../@types/grocery";
import {
	grocerCheck,
	grocerDelt,
} from "../../store/groceries/groceries.action";

const GroceryList = () => {
	// const count = useSelector<StateStore, number>(
	// 	(state) => state.groceries.count
	// );

	const { count, list: groceries } = useSelector(
		(state: StateStore) => state.groceries
	);

	return (
		<>
			<h2>Liste des courses</h2>
			<h3>Nombre d'éléments : {count}</h3>
			{groceries.map((grocery) => {
				<GroceryListItem {...grocery} key={grocery.id} />;
			})}
		</>
	);
};

const GroceryListItem = ({ id, isCheck, name, quantity }: Grocery) => {
	const dispatch = useDispatch();

	const handleCheck = () => {
		dispatch(grocerCheck(id));
	};

	const handleDelt = () => {
		dispatch(grocerDelt(id));
	};

	return (
		<div>
			<p>
				[{isCheck ? "V" : ""}] {name} {quantity}
			</p>
			<button onClick={handleCheck}>Check</button>
			<button onClick={handleDelt}>Supprimer</button>
		</div>
	);
};

export default GroceryList;
