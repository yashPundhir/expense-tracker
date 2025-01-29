import { useState, useEffect } from "react";

import { AccountSummary, Passbook, AddExpense } from "./";

import DashoardShimmer from "../shimmerComponents/DashoardShimmer";

const Layout = () => {
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsDataLoaded(true);
		}, 2000);
	}, []);

	return (
		<main className="container mx-auto px-10 pt-5 pb-8 flex flex-col justify-center items-center gap-5">
			{isDataLoaded ? (
				<>
					<AccountSummary />
					<AddExpense />
					<Passbook />
				</>
			) : (
				<DashoardShimmer />
			)}
		</main>
	);
};

export default Layout;
