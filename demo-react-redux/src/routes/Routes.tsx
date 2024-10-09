import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import GroceryPage from "../pages/Grocery/GroceryPage";
import GroceryAddPage from "../pages/Grocery/GroceryAddPage";

import App from "../App";
import NotFoundPage from "../pages/error/NotFoundPage";
import CountryPage from "../pages/Country/CountryPage";
import RecipeLayout from "../pages/Recipe/RecipeLayout";
import RecipeIndexPage from "../pages/Recipe/RecipeIndexPage";
import RecipeListPage from "../pages/Recipe/RecipeListPage";
import RecipeDetailPage from "../pages/Recipe/RecipeDetailPage";
import RecipeFormAddPage from "../pages/Recipe/RecipeFormAddPage";

// const Routes: RouteObject[] = [
// 	{
// 		path: "",
// 		element: <HomePage />,
// 	},
// 	{
// 		path: "grocery",
// 		element: <GroceryPage />,
// 	},
// 	{
// 		path: "grocery/add",
// 		element: <GroceryAddPage />,
// 	},
// ];

const Routes: RouteObject[] = [
	{
		path: "",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "*", //si il n'y a rien qui match, c'est ce lien qui est pris (prio la plus basse)
				element: <NotFoundPage />,
			},
			{
				path: "grocery",
				element: <GroceryPage />,
			},
			{
				path: "grocery/add",
				element: <GroceryAddPage />,
			},
			{
				path: "country",
				element: <CountryPage />,
			},
			{
				path: "recipe",
				element: <RecipeLayout />,
				children: [
					{ index: true, element: <RecipeIndexPage /> },
					{
						path: "list",
						element: <RecipeListPage />,
					},
					{
						path: "detail/:id",
						element: <RecipeDetailPage />,
					},
					{
						path: "add",
						element: <RecipeFormAddPage />,
					},
				],
			},
		],
	},
];

export default Routes;
