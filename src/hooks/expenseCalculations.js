import { useAtomValue } from "jotai";

import { expenseAtom } from "@/atoms/expenses/store";

export const useExpenseCalculations = () => {
	let expenseTotal = 0;
	let expenseDebitTotal = 0;
	let expenseCreditTotal = 0;

	const expenses = useAtomValue(expenseAtom);

	expenses.forEach((expense) => {
		if (expense.expenseType === "Debit") {
			expenseTotal = expenseTotal - expense.amount;
			expenseDebitTotal = expenseDebitTotal + expense.amount;
		} else if (expense.expenseType === "Credit") {
			expenseTotal = expenseTotal + expense.amount;
			expenseCreditTotal = expenseCreditTotal + expense.amount;
		}
	});

	return { expenseTotal, expenseDebitTotal, expenseCreditTotal };
};
