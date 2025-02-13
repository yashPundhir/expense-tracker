import { useExpenseCalculations } from "@/hooks/expenseCalculations";

import { inrRed, inrGreen, plus, minus } from "@/assets/generalAssets";

const AccountSummary = () => {
	const { expenseTotal, expenseDebitTotal, expenseCreditTotal } =
		useExpenseCalculations();

	return (
		<section className="w-full px-5 flex flex-row justify-between items-center ">
			{/* Total Block */}
			<div className="flex flex-row justify-start items-center gap-1">
				<span className="text-[30px] font-normal">Total:</span>
				<span className="flex flex-row justify-center items-center">
					{Math.abs(expenseTotal) > 0 && (
						<img
							src={expenseTotal > 0 ? plus : minus}
							alt="arithmetic-icon"
							className="w-[30px] -mr-1 mt-1"
						/>
					)}

					<img
						src={expenseTotal > 0 ? inrGreen : inrRed}
						alt="inr-icon"
						className="w-[28px] mt-0.5"
					/>
					<span
						className={`text-[30px] font-semibold ${
							expenseTotal > 0 ? "text-green-500" : "text-red-500"
						}`}
					>
						{Math.abs(expenseTotal)}
					</span>
				</span>
			</div>
			<div className="flex flex-row justify-center items-center gap-10">
				{/* Credit block */}
				<div className="flex flex-row justify-start items-center gap-1">
					<span className="text-[30px] font-normal">Credit:</span>
					<span className="flex flex-row justify-center items-center">
						{expenseCreditTotal > 0 && (
							<img
								src={plus}
								alt="arithmetic-icon"
								className="w-[30px] -mr-1 mt-1"
							/>
						)}

						<img src={inrGreen} alt="inr-icon" className="w-[28px] mt-0.5" />
						<span
							className={`text-[30px] font-semibold text-green-500
							}`}
						>
							{expenseCreditTotal}
						</span>
					</span>
				</div>

				{/* Debit block */}
				<div className="flex flex-row justify-start items-center gap-1">
					<span className="text-[30px] font-normal">Debit:</span>
					<span className="flex flex-row justify-center items-center">
						{expenseDebitTotal > 0 && (
							<img
								src={minus}
								alt="arithmetic-icon"
								className="w-[30px] -mr-1 mt-1"
							/>
						)}

						<img src={inrRed} alt="inr-icon" className="w-[28px] mt-0.5" />
						<span
							className={`text-[30px] font-semibold text-red-500
							}`}
						>
							{expenseDebitTotal}
						</span>
					</span>
				</div>
			</div>
		</section>
	);
};

export default AccountSummary;
