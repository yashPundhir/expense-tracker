import { z } from "zod";

export const transactionFormSchema = z.object({
	amount: z
		.number({
			required_error: "Amount is required",
			invalid_type_error: "Amount must be a number",
		})
		.positive()
		.min(0.01, "Amount must be greater than 0"),
	expenseDescription: z
		.string({
			required_error: "Description is required",
			invalid_type_error: "Description must be a string",
		})
		.min(1, "Description is required"),
	expenseCategory: z
		.string({
			required_error: "Category is required",
			invalid_type_error: "Description must be a string",
		})
		.min(1, "Category is required"),
	expenseType: z.enum(["debit", "credit"], {
		errorMap: () => ({
			message: "Expense type must be either debit or credit",
		}),
	}),
	recurring: z.boolean(),
	// expenseDate: z.date(),
	expenseDate: z.coerce.date({
		required_error: "Pick a Date",
		invalid_type_error: "That's not a date!",
	}),
});
