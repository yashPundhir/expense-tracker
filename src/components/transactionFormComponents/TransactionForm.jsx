import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { expenseFormSchema } from "@/models/expenseFormSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select"; // For the expenseType enum
import { Checkbox } from "@/components/ui/checkbox"; // For the recurring boolean
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const TransactionForm = () => {
	const form = useForm({
		resolver: zodResolver(expenseFormSchema),
		defaultValues: {
			amount: 0,
			expenseDescription: "",
			expenseCategory: "",
			expenseType: "debit", // Default to 'debit'
			recurring: false,
			expenseDate: new Date(),
		},
	});

	const onSubmit = (data) => {
		console.log(data); // Handle the form submission
	};

	return (
		<section className="w-full px-5 flex flex-col justify-center items-center gap-5 border-0">
			<h1 className="text-[22px] font-semibold">Add a New Transaction</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-row flex-wrap justify-center items-center gap-10 "
				>
					{/* Amount Field */}
					<FormField
						control={form.control}
						name="amount"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Amount</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="Enter amount"
										{...field}
										value={field.value ?? ""}
										onChange={(e) =>
											field.onChange(
												e.target.value ? Number(e.target.value) : ""
											)
										}
									/>
								</FormControl>
								<FormDescription>
									Enter the amount for the expense.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Expense Description Field */}
					<FormField
						control={form.control}
						name="expenseDescription"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Enter description" {...field} />
								</FormControl>
								<FormDescription>Describe the expense.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Expense Category Field */}
					<FormField
						control={form.control}
						name="expenseCategory"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<Input placeholder="Enter category" {...field} />
								</FormControl>
								<FormDescription>
									Specify the category for the expense.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Expense Type (Enum) Field */}
					<FormField
						control={form.control}
						name="expenseType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Expense Type</FormLabel>
								<FormControl>
									<Select {...field}>
										<option value="debit">Debit</option>
										<option value="credit">Credit</option>
									</Select>
								</FormControl>
								<FormDescription>
									Select whether it&apos;s a debit or credit expense.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Recurring (Boolean) Field */}
					<FormField
						control={form.control}
						name="recurring"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Recurring?</FormLabel>
								<FormControl>
									<Checkbox {...field} />
								</FormControl>
								<FormDescription>
									Check if the expense is recurring.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Expense Date Field */}
					<FormField
						control={form.control}
						name="expenseDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Expense Date</FormLabel>
								<FormControl>
									<Input
										type="date"
										{...field}
										value={
											field.value
												? new Date(field.value).toISOString().split("T")[0]
												: ""
										}
										onChange={(e) => field.onChange(new Date(e.target.value))}
									/>
								</FormControl>
								<FormDescription>
									Select the date of the expense.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</section>
	);
};

export default TransactionForm;
