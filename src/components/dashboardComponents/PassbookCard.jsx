import { inrRed, inrGreen, plus, minus } from "@/assets/generalAssets";

const PassbookCard = ({ expense }) => {
	return (
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
	);
};

export default PassbookCard;
