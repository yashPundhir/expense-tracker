import { Outlet } from "react-router-dom";

import Navbar from "./components/generalComponents/Navbar";

import Footer from "./components/generalComponents/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
