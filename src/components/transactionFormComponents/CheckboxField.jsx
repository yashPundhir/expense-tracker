import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";

const CheckboxField = ({ form, item }) => {
	return (
		<FormField
			control={form.control}
			name={item.fieldName}
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormControl>
						<Checkbox checked={field.value} onCheckedChange={field.onChange} />
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel>{item.fieldLabel}</FormLabel>
						<FormDescription>{item.fieldDescription}</FormDescription>
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
	);
};

export default CheckboxField;
