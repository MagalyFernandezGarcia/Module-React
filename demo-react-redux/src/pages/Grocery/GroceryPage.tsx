import { Link } from "react-router-dom";
import GroceryList from "../../containers/Groceries/GroceryList";

const GroceryPage = () => {
	return (
		<>
			<h1>Liste de courses</h1>
			<button>
				<Link to="add"> Ajouter un élément</Link>
			</button>

			<GroceryList />
		</>
	);
};

export default GroceryPage;
