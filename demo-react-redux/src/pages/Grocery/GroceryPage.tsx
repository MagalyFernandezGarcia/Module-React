import GroceryAddForm from "../../containers/Groceries/GroceryAddForm";
import GroceryList from "../../containers/Groceries/GroceryList";

const GroceryPage = () => {
	return (
		<>
			<h1>Liste de courses</h1>
			<GroceryAddForm />
			<GroceryList />
		</>
	);
};

export default GroceryPage;
