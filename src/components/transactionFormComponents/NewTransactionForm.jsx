import { useNavigate } from "react-router-dom";

import { nanoid } from "nanoid";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useSetAtom } from "jotai";

import { toast } from "sonner";

import { transactionFormSchema } from "@/models/expenseFormSchema";

import { expenseAtom } from "@/atoms/expenses/store";

import { CheckboxField, DatePicker, InputField, SelectField } from ".";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";

import { Toaster } from "@/components/ui/sonner";

import { transactionFormConstants } from "@/constants/transactionFormConstants";

import { CircleX, CircleCheckBig } from "lucide-react";

const NewTransactionForm = () => {
	const navigate = useNavigate();

	const setExpense = useSetAtom(expenseAtom);

	const form = useForm({
		resolver: zodResolver(transactionFormSchema),
		defaultValues: {
			amount: "",
			expenseDescription: "",
			expenseCategory: "",
			expenseType: "",
			recurring: false,
			expenseDate: "",
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
			toast.success("Transaction Added Successfully", {
				// description: "Entering The Application...",
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

			setExpense((expenses) => [
				...expenses,
				{
					...data,
					expenseDateObj: data.expenseDate,
					expenseDate: {
						weekDay: formattedDateArray[0],
						day: formattedDateArray[2],
						month: formattedDateArray[1],
						year: formattedDateArray[3],
					},
					id: nanoid(),
				},
			]);

			setTimeout(() => {
				navigate("/");
			}, 2700);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error("Failed to submit the form. Please try again.", {
				// description: "Try Again with Correct Credentials",
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
		<section className="w-full px-5 flex flex-col justify-center items-center gap-5 border-0">
			<Toaster />
			<h1 className="text-[22px] font-semibold">Add a New Transaction</h1>
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
		</section>
	);
};

export default NewTransactionForm;
