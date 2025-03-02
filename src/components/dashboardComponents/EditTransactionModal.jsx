import { useState } from "react";

import { EditTransactionForm } from ".";

import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogClose,
	DialogContent,
	// DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const EditTransactionModal = ({ triggerBtn, expense }) => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{triggerBtn}</DialogTrigger>
			<DialogContent className="max-w-6xl dark:border-zinc-500 border-zinc-700 overflow-y-auto sm:h-auto h-[95%]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-center">
						Edit Transaction
					</DialogTitle>
					{/* <DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription> */}
				</DialogHeader>
				<div className="text-center">
					<EditTransactionForm expense={expense} setOpen={setOpen} />
				</div>
				<DialogFooter className="flex flex-row justify-end">
					<DialogClose asChild>
						<Button type="submit">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditTransactionModal;
