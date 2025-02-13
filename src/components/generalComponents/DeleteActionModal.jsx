import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteActionModal = ({ deleteAction, description, triggerBtn }) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{triggerBtn}</AlertDialogTrigger>
			<AlertDialogContent className="border-red-400 dark:border-red-600">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-red-400 dark:text-red-600 capitalize">
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="border-zinc-600">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						onClick={deleteAction}
						className="bg-red-400 dark:bg-red-600 text-foreground"
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteActionModal;
