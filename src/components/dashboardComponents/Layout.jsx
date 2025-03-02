import { useState, useEffect } from "react";

import { AccountSummary, Passbook, AddTransaction } from "./";

import DashoardShimmer from "../shimmerComponents/DashoardShimmer";

const Layout = () => {
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsDataLoaded(true);
		}, 2000);
	}, []);

	return (
		<main className="container mx-auto sm:px-10 px-3 sm:pt-5 pt-0 sm:pb-8 pb-3 flex flex-col justify-center items-center gap-5">
			{isDataLoaded ? (
				<>
					<AccountSummary />
					<AddTransaction />
					<Passbook />
				</>
			) : (
				<DashoardShimmer />
			)}
		</main>
	);
};

export default Layout;
