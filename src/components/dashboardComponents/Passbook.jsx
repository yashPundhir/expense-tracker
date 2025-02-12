import { useAtomValue } from "jotai";

import { expenseAtom } from "@/atoms/expenses/store";
import { PassbookCard } from ".";

const Passbook = () => {
	const expenses = useAtomValue(expenseAtom);

	return (
		<section className="dark:bg-zinc-900 bg-zinc-200 py-10 px-10 rounded-2xl flex flex-row flex-wrap justify-center items-center gap-10">
			{expenses.length > 0 ? (
				expenses.map((expense, index) => (
					<PassbookCard expense={expense} key={index} />
				))
			) : (
				<span className="text-3xl font-semibold text-amber-400">
					No Transactions Found.
				</span>
			)}
		</section>
	);
};

export default Passbook;
