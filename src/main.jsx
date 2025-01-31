import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";

import { DashboardPage, TransactionFormPage } from "./pages/";

import "./index.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<DashboardPage />} />
			<Route path="addTransaction" element={<TransactionFormPage />} />
			{/* <Route path="about" element={<About />} /> */}
			{/* <Route path="contact" element={<Contact />} /> */}
			{/* <Route path="user/:userid" element={<User />} /> */}
			{/* <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
