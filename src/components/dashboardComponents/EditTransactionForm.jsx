import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { transactionFormSchema } from "@/models/expenseFormSchema";

import { Form } from "@/components/ui/form";

import { Button } from "../ui/button";

import {
	CheckboxField,
	DatePicker,
	InputField,
	SelectField,
} from "@/components/transactionFormComponents";

import { transactionFormConstants } from "@/constants/transactionFormConstants";

const EditTransactionForm = ({ expense }) => {
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
		toast(
			<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
				<code className="text-white">{JSON.stringify(data, null, 2)}</code>
			</pre>
		);
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

				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default EditTransactionForm;
