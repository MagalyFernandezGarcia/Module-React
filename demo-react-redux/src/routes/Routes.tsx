import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import GroceryPage from "../pages/Grocery/GroceryPage";
import GroceryAddPage from "../pages/Grocery/GroceryAddPage";

import App from "../App";

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
				path: "grocery",
				element: <GroceryPage />,
			},
			{
				path: "grocery/add",
				element: <GroceryAddPage />,
			},
		],
	},
];

export default Routes;
