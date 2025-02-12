import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SelectField = ({ form, item }) => {
	return (
		<FormField
			control={form.control}
			name={item.fieldName}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{item.fieldLabel}</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={item.fieldPlaceholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{item?.selectData?.map((data) => (
								<SelectItem key={data.id} value={data.value}>
									{data.title}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormDescription>{item.fieldDescription}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default SelectField;
