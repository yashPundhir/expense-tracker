import { Button } from "../ui/button";

import { deleteTransactionModal } from "@/constants/generalConstants";

import { Trash2 as DeleteIcon } from "lucide-react";

const DeleteActionBtn = () => {
	return (
		<Button
			variant="outline"
			size="icon"
			className={deleteTransactionModal.triggerBtnClass}
		>
			<DeleteIcon strokeWidth={1} />
		</Button>
	);
};

export default DeleteActionBtn;
