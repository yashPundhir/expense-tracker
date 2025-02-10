import { z } from "zod";

export const expenseFormSchema = z.object({
	amount: z.number().positive().min(0.01, "Amount must be greater than 0"),
	expenseDescription: z.string().min(1, "Description is required"),
	expenseCategory: z.string().min(1, "Category is required"),
	expenseType: z.enum(["debit", "credit"], {
		errorMap: () => ({
			message: "Expense type must be either debit or credit",
		}),
	}),
	recurring: z.boolean(),
	// expenseDate: z.date(),
	expenseDate: z.coerce.date(),
});
