import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { CirclePlus } from "lucide-react";

const AddTransaction = () => {
	const navigate = useNavigate();

	const handleAddTransaction = () => {
		navigate("/addTransaction");
	};

	return (
		<section className="w-full flex justify-end pr-5">
			<Button onClick={handleAddTransaction}>
				<CirclePlus /> Add Transaction
			</Button>
		</section>
	);
};

export default AddTransaction;
