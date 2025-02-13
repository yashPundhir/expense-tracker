import { useEffect } from "react";

import { useAtom } from "jotai";

import { toast } from "sonner";

import { expenseAtom } from "@/atoms/expenses/store";

import DeleteActionModal from "../generalComponents/DeleteActionModal";

import { Button } from "@/components/ui/button";

import { Toaster } from "@/components/ui/sonner";

import { deleteTransactionModal } from "@/constants/generalConstants";

import { inrRed, inrGreen, plus, minus } from "@/assets/generalAssets";

import {
	SquarePen as EditIcon,
	Trash2 as DeleteIcon,
	CircleCheckBig,
} from "lucide-react";

const PassbookCard = ({ expense }) => {
	const [expenses, setExpenses] = useAtom(expenseAtom);

	useEffect(() => {
		console.log(expenses);
	}, [expenses]);

	const deleteTransaction = () => {
		const currentId = expense.id;

		setExpenses(expenses.filter((expense) => expense.id !== currentId));

		toast.error("Transaction Has Been Deleted", {
			duration: 2500,
			unstyled: false,
			classNames: {
				toast: "ring-1 ring-red-500",
				title: "text-red-500 text-lg",
				icon: "mr-2",
			},

			icon: <CircleCheckBig color="#ef4444" />,
		});
	};

	return (
		<div className="relative">
			<Toaster />
			<div
				className={`w-[450px] px-6 py-2.5 bg-background ring-1 ring-zinc-400 dark:ring-zinc-600 rounded-lg ${
					expense.expenseType === "Debit"
						? "hover:ring-[#E71C23] dark:hover:ring-[#E71C23]"
						: "hover:ring-green-400 dark:hover:ring-[#43BE31]"
				} duration-500 ease-in-out`}
			>
				<div className="flex flex-col justify-center items-center gap-0">
					<div className="w-full flex flex-row justify-between items-center gap-20">
						<span className="text-[22px] font-semibold">
							{expense.expenseDescription}
						</span>
						<span className="flex flex-row justify-center items-center">
							<img
								src={expense.expenseType === "Debit" ? minus : plus}
								alt="arithmetic-icon"
								className="w-[30px] -mr-1 mt-1"
							/>
							<img
								src={expense.expenseType === "Debit" ? inrRed : inrGreen}
								alt="inr-icon"
								className="w-[28px] mt-0.5"
							/>
							<span
								className={`${
									expense.expenseType === "Debit"
										? "text-[#E71C23]"
										: "text-[#43BE31]"
								} text-[32px] font-semibold`}
							>
								{expense.amount}
							</span>
						</span>
					</div>
					<div className="w-full flex flex-row justify-between items-center gap-20">
						<span className="text-[14px] text-zinc-700 dark:text-zinc-400">
							{expense.expenseDate.weekDay} {expense.expenseDate.day}{" "}
							{expense.expenseDate.month} {expense.expenseDate.year}
						</span>
						<span className="text-[20px] font-semibold">
							&ldquo;{expense.expenseCategory}&rdquo;
						</span>
					</div>
				</div>
			</div>
			<div className="absolute flex flex-row justify-center items-center gap-3 -top-6 right-0">
				<Button
					variant="outline"
					size="icon"
					className="border-2 border-zinc-400 dark:border-zinc-600 hover:border-green-400 hover:dark:border-green-600 hover:bg-background duration-500 ease-in-out"
				>
					<EditIcon strokeWidth={1} />
				</Button>

				<DeleteActionModal
					deleteAction={deleteTransaction}
					description={deleteTransactionModal.warning}
					triggerBtn={
						<Button
							variant="outline"
							size="icon"
							className={deleteTransactionModal.triggerBtnClass}
						>
							<DeleteIcon strokeWidth={1} />
						</Button>
					}
				/>
			</div>
		</div>
	);
};

export default PassbookCard;
