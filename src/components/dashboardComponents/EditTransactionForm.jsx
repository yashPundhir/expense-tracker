import { useForm } from "react-hook-form";

import { useSetAtom } from "jotai";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { transactionFormSchema } from "@/models/expenseFormSchema";

import { expenseAtom } from "@/atoms/expenses/store";

import { Form } from "@/components/ui/form";

import { Button } from "../ui/button";

// import { DialogClose } from "@/components/ui/dialog";

import {
	CheckboxField,
	DatePicker,
	InputField,
	SelectField,
} from "@/components/transactionFormComponents";

import { transactionFormConstants } from "@/constants/transactionFormConstants";

import { CircleCheckBig, CircleX } from "lucide-react";

const EditTransactionForm = ({ expense, setOpen }) => {
	const setExpense = useSetAtom(expenseAtom);

	const form = useForm({
		resolver: zodResolver(transactionFormSchema),
		defaultValues: {
			amount: expense.amount,
			expenseDescription: expense.expenseDescription,
			expenseCategory: expense.expenseCategory,
			expenseType: expense.expenseType,
			recurring: expense.recurring,
			expenseDate: expense.expenseDateObj
				? new Date(expense.expenseDateObj)
				: new Date(),
		},
	});

	const getCustomFormFields = (formItem, form) => {
		if (formItem.id < 4) {
			return <InputField key={formItem.id} form={form} item={formItem} />;
		} else if (formItem.id === 4) {
			return <SelectField key={formItem.id} form={form} item={formItem} />;
		} else if (formItem.id === 5) {
			return <CheckboxField key={formItem.id} form={form} item={formItem} />;
		} else if (formItem.id === 6) {
			return <DatePicker key={formItem.id} form={form} item={formItem} />;
		}
	};

	const onSubmit = (data) => {
		try {
			toast.success("Transaction Updated Successfully", {
				duration: 2500,
				unstyled: false,
				classNames: {
					toast: "ring-1 ring-green-500",
					title: "text-green-500 text-lg",
					icon: "mr-2",
				},

				icon: <CircleCheckBig color="#45ce30" />,
			});

			const formattedDateArray = data.expenseDate
				.toString()
				.split(" ")
				.slice(0, 4);

			setExpense((prevExpenses) =>
				prevExpenses.map((prevExpense) =>
					prevExpense.id === expense.id
						? {
								...data,
								expenseDateObj: data.expenseDate,
								expenseDate: {
									weekDay: formattedDateArray[0],
									day: formattedDateArray[2],
									month: formattedDateArray[1],
									year: formattedDateArray[3],
								},
								id: prevExpense.id,
						  }
						: {
								...prevExpenses,
						  }
				)
			);

			setTimeout(() => {
				setOpen(false);
			}, 2700);
		} catch (error) {
			console.error("Unable to update transaction", error);
			toast.error("Failed to update the transaction. Please try again.", {
				duration: 4000,
				unstyled: false,
				classNames: {
					toast: "ring-1 ring-red-500",
					title: "text-red-500 text-lg",
					icon: "mr-2",
				},

				icon: <CircleX color="#e71c23" />,
			});
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-row flex-wrap justify-center items-center gap-10 "
			>
				{transactionFormConstants.map((formItem) =>
					getCustomFormFields(formItem, form)
				)}
				{/* <DialogClose asChild> */}
				<Button type="submit">Save changes</Button>
				{/* </DialogClose> */}
			</form>
		</Form>
	);
};

export default EditTransactionForm;
