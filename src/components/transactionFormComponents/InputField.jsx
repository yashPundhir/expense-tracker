import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const InputField = ({ form, item }) => {
	// method to get custom value and onchange based on id
	// const getCustomProps = (field, item) => {
	//   switch (item.id) {
	//     case 1: // Custom behavior for ID 1 (Convert to Number)
	//       return {
	//         value: field.value ?? "",
	//         onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : ""),
	//       };
	//     case 2: // Custom behavior for ID 2 (Convert to Uppercase)
	//       return {
	//         value: field.value ?? "",
	//         onChange: (e) => field.onChange(e.target.value.toUpperCase()),
	//       };
	//     case 3: // Custom behavior for ID 3 (Date Formatting)
	//       return {
	//         value: field.value ? new Date(field.value).toISOString().split("T")[0] : "",
	//         onChange: (e) => field.onChange(new Date(e.target.value)),
	//       };
	//     case 4: // Custom behavior for ID 4 (Trim Whitespace)
	//       return {
	//         value: field.value ?? "",
	//         onChange: (e) => field.onChange(e.target.value.trim()),
	//       };
	//     default: // Default behavior (react-hook-form handles it)
	//       return {};
	//   }
	// };

	// Example form field wrt above method
	// <FormField
	//   control={form.control}
	//   name={item.fieldName}
	//   render={({ field }) => (
	//     <FormItem>
	//       <FormLabel>{item.fieldLabel}</FormLabel>
	//       <FormControl>
	//         <Input
	//           placeholder={item.fieldPlaceholder}
	//           type={item.fieldType}
	//           {...field} // Spread react-hook-form default properties
	//           {...getCustomProps(field, item)} // Apply custom behavior based on `item.id`
	//         />
	//       </FormControl>
	//       <FormDescription>{item.fieldDescription}</FormDescription>
	//       <FormMessage />
	//     </FormItem>
	//   )}
	// />

	return (
		<FormField
			control={form.control}
			name={item.fieldName}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{item.fieldLabel}</FormLabel>
					<FormControl>
						<Input
							placeholder={item.fieldPlaceholder}
							type={item.fieldType}
							{...field}
							{...(item.id === 1
								? {
										value: field.value ?? "",
										onChange: (e) =>
											field.onChange(
												e.target.value ? Number(e.target.value) : ""
											),
								  }
								: {})}
						/>
					</FormControl>
					<FormDescription>{item.fieldDescription}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default InputField;
