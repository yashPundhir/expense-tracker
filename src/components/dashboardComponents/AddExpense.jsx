import { Button } from "@/components/ui/button";

import { CirclePlus } from "lucide-react";

const AddExpense = () => {
	return (
		<section className="w-full flex justify-end pr-5">
			<Button>
				<CirclePlus /> Add Expense
			</Button>
		</section>
	);
};

export default AddExpense;
