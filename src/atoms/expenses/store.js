import { atom } from "jotai";

export const expenseAtom = atom([
	{
		id: 1,
		expenseCause: "Burger",
		expenseCategory: "Food",
		expenseType: "Debit",
	},
]);

/* data structure of expense object
{
  id: string,             // Unique identifier for the transaction (UUID, or auto-generated)
  type: "income" | "expense",   // Type of transaction (income or expense)
  amount: number,         // The monetary value of the transaction
  category: string,       // Category of the expense (e.g., "Food", "Rent", "Transport")
  description: string,    // Optional: A brief description of the transaction (e.g., "Lunch", "Electric bill")
  date: string,           // Date of the transaction in ISO 8601 format ("YYYY-MM-DD")
  dateTimestamp: number,  // Timestamp of the transaction for sorting/filtering (UNIX timestamp in milliseconds)
  createdAt: string,      // The creation date of the transaction in ISO 8601 format
  updatedAt: string,      // The date when the transaction was last updated in ISO 8601 format
  recurring: boolean,     // Optional: If the transaction is recurring (e.g., monthly rent, subscription)
  frequency: string | null, // Optional: Frequency of recurrence ("monthly", "weekly", etc.) if applicable
}
*/
