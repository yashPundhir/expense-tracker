import { useExpenseCalculations } from "@/hooks/expenseCalculations";

import { inrRed, inrGreen, plus, minus } from "@/assets/generalAssets";

const AccountSummary = () => {
	const { expenseTotal, expenseDebitTotal, expenseCreditTotal } =
		useExpenseCalculations();

	return (
		<section className="w-full sm:px-5 px-0 flex sm:flex-row flex-col justify-between items-center">
			{/* Total Block */}
			<div className="w-full flex flex-row sm:justify-start justify-center items-center gap-1">
				<span className="sm:text-[30px] text-[20px] font-normal">Total:</span>
				<div className="flex flex-row justify-center items-center">
					{Math.abs(expenseTotal) > 0 && (
						<img
							src={expenseTotal > 0 ? plus : minus}
							alt="arithmetic-icon"
							className="sm:w-[30px] w-[20px] -mr-1 sm:mr-0 mt-1"
						/>
					)}

					<img
						src={expenseTotal > 0 ? inrGreen : inrRed}
						alt="inr-icon"
						className="sm:w-[28px] w-[18px] mt-0.5"
					/>
					<span
						className={`sm:text-[30px] text-[22px] font-semibold ${
							expenseTotal > 0 ? "text-green-500" : "text-red-500"
						}`}
					>
						{Math.abs(expenseTotal)}
					</span>
				</div>
			</div>
			<div className="w-full px-2 flex flex-row flex-wrap sm:justify-end justify-between items-center sm:gap-10 gap-5">
				{/* Credit block */}
				<div className="flex flex-row justify-start items-center gap-1">
					<span className="sm:text-[30px] text-[20px] font-normal">
						Credit:
					</span>
					<span className="flex flex-row justify-center items-center">
						{expenseCreditTotal > 0 && (
							<img
								src={plus}
								alt="arithmetic-icon"
								className="sm:w-[30px] w-[20px] -mr-1 mt-1"
							/>
						)}

						<img
							src={inrGreen}
							alt="inr-icon"
							className="sm:w-[28px] w-[18px] mt-0.5"
						/>
						<span
							className={`sm:text-[30px] text-[22px] font-semibold text-green-500
							}`}
						>
							{expenseCreditTotal}
						</span>
					</span>
				</div>

				{/* Debit block */}
				<div className="flex flex-row justify-start items-center gap-1">
					<span className="sm:text-[30px] text-[20px] font-normal">Debit:</span>
					<span className="flex flex-row justify-center items-center">
						{expenseDebitTotal > 0 && (
							<img
								src={minus}
								alt="arithmetic-icon"
								className="sm:w-[30px] w-[20px] -mr-1 mt-1"
							/>
						)}

						<img
							src={inrRed}
							alt="inr-icon"
							className="sm:w-[28px] w-[18px] mt-0.5"
						/>
						<span
							className={`sm:text-[30px] text-[22px] font-semibold text-red-500
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
