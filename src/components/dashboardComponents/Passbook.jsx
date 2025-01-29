import { useAtomValue } from "jotai";

import { expenseAtom } from "@/atoms/expenses/store";
import { PassbookCard } from ".";

const Passbook = () => {
	const expenses = useAtomValue(expenseAtom);

	return (
		<section className="dark:bg-zinc-900 bg-zinc-200 py-10 rounded-2xl flex flex-row flex-wrap justify-center items-center gap-10">
			{expenses.map((expense) => (
				<PassbookCard expense={expense} key={expense.id} />
			))}
		</section>
	);
};

export default Passbook;
