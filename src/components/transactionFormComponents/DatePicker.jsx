import { cn } from "@/lib/utils";

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { format } from "date-fns";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import { Button } from "@/components/ui/button";

import { Calendar as CalendarIcon } from "lucide-react";

const DatePicker = ({ form, item, edit = false }) => {
	// console.log(form);
	return (
		<FormField
			control={form.control}
			name={item.fieldName}
			render={({ field }) => {
				console.log(field.value);
				// console.log(field.onChange);
				// console.log(field.ref);
				return (
					<FormItem className="flex flex-col">
						<FormLabel>{item.fieldLabel}</FormLabel>
						<Popover>
							<PopoverTrigger asChild>
								<FormControl>
									<Button
										variant={"outline"}
										className={cn(
											"w-[240px] pl-3 text-left font-normal",
											!field.value && "text-muted-foreground"
										)}
									>
										{field.value ? (
											format(field.value, "PPP")
										) : (
											<span>{item.fieldPlaceholder}</span>
										)}
										<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									className="pointer-events-auto"
									captionLayout="dropdown-buttons"
									mode="single"
									selected={field.value ? field.value : new Date()}
									onSelect={field.onChange}
									initialFocus
									min={2}
								/>
							</PopoverContent>
						</Popover>
						<FormDescription>{item.fieldDescription}</FormDescription>
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
};

export default DatePicker;
