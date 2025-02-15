import { Button } from "../ui/button";

import { editTransactionModal } from "@/constants/generalConstants";

import { SquarePen as EditIcon } from "lucide-react";

const EditActionBtn = () => {
	return (
		<Button
			variant="outline"
			size="icon"
			className={editTransactionModal.triggerBtnClass}
		>
			<EditIcon strokeWidth={1} />
		</Button>
	);
};

export default EditActionBtn;
