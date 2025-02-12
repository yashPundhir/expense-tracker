export const transactionTypes = [
	{
		id: 1,
		value: "Debit",
		title: "Debit",
	},
	{
		id: 2,
		value: "Credit",
		title: "Credit",
	},
];

export const transactionFormConstants = [
	{
		id: 1,
		fieldName: "amount",
		fieldLabel: "Expense Amount",
		fieldPlaceholder: "Enter amount",
		fieldType: "number",
		fieldDescription: "Enter the amount for the expense.",
	},
	{
		id: 2,
		fieldName: "expenseDescription",
		fieldLabel: "Expense Description",
		fieldPlaceholder: "Enter Description",
		fieldType: "text",
		fieldDescription: "Details of the expense.",
	},
	{
		id: 3,
		fieldName: "expenseCategory",
		fieldLabel: "Expense Category",
		fieldPlaceholder: "Enter Category",
		fieldType: "text",
		fieldDescription: "Specify the category for the expense.",
	},
	{
		id: 4,
		fieldName: "expenseType",
		fieldLabel: "Expense Type",
		fieldPlaceholder: "Select Type of Transaction",
		fieldType: "select",
		selectData: transactionTypes,
		fieldDescription: "Select whether it's a debit or credit expense.",
	},
	{
		id: 5,
		fieldName: "recurring",
		fieldLabel: "Is Recurring Expense?",
		fieldPlaceholder: "",
		fieldType: "checkbox",
		fieldDescription: "Check if the expense is recurring.",
	},
	{
		id: 6,
		fieldName: "expenseDate",
		fieldLabel: "Expense Date",
		fieldPlaceholder: "Pick a date",
		fieldType: "date",
		fieldDescription: "Select the date of the expense.",
	},
];
