import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//initialisation du store de Redux
import store from "./store/store.ts";
import { Provider } from "react-redux";

//Initialisation du routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.tsx";
const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
