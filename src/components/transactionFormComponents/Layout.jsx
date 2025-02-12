// import React from "react";

import { TransactionForm } from ".";
// import TrialForm from "./TrialForm";

const Layout = () => {
	return (
		<main className="container mx-auto px-10 pt-0 pb-8 flex flex-col justify-center items-center gap-5">
			<TransactionForm />
			{/* <TrialForm /> */}
		</main>
	);
};

export default Layout;
