import { Outlet } from "react-router-dom";

const RecipeLayout = () => {
	return (
		<>
			<h1>Recettes</h1>
			<Outlet />
		</>
	);
};

export default RecipeLayout;
