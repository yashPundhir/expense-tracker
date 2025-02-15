import { EditTransactionForm } from ".";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	// DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const EditTransactionModal = ({ triggerBtn, expense }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{triggerBtn}</DialogTrigger>
			<DialogContent className="max-w-6xl dark:border-zinc-500 border-zinc-700">
				<DialogHeader>
					<DialogTitle className="text-2xl text-center">
						Edit Transaction
					</DialogTitle>
					{/* <DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription> */}
				</DialogHeader>
				<div className="text-center">
					<EditTransactionForm expense={expense} />
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditTransactionModal;
