import { useAtomValue } from "jotai";

import { expenseAtom } from "@/atoms/expenses/store";
import { PassbookCard } from ".";

const Passbook = () => {
	const expenses = useAtomValue(expenseAtom);

	return (
		<section
			className={`sm:w-fit w-full dark:bg-zinc-900 bg-zinc-200 sm:py-10 sm:px-10 ${
				expenses.length > 0 ? "p-3.5" : "p-5"
			} mt-3 sm:mt-0 sm:rounded-2xl rounded-md flex flex-row flex-wrap justify-center items-center sm"gap-10 gap-8`}
		>
			{expenses?.length > 0 ? (
				expenses.map((expense, index) => (
					<PassbookCard expense={expense} key={index} />
				))
			) : (
				<span className="sm:text-3xl text-[18px] font-semibold text-amber-400">
					No Transactions Found.
				</span>
			)}
		</section>
	);
};

export default Passbook;
