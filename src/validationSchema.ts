import { z } from 'zod';

export const materialSchema = z.object({
	Name: z.string().nonempty({ message: 'Name is required' }),
	Rate: z.number().min(0, { message: 'Rate must be a non-negative number' }),
	Quantity: z
		.number()
		.min(0, { message: 'Quantity must be a non-negative number' }),
	Total: z.number().min(0, { message: 'Total must be a non-negative number' }),
});

export const taskSchema = z.object({
	Title: z.string().nonempty({ message: 'Title is required' }),
	Description: z.string().nonempty({ message: 'Description is required' }),
	Material: z.array(materialSchema),
});

export const groupSchema = z.object({
	Task: z.array(taskSchema),
});

export const estimateSchema = z.object({
	Estimate: z.object({
		Title: z.string().nonempty({ message: 'Title is required' }),
		ExpiryDate: z.string().nonempty({ message: 'Expiry Date is required' }),
		Group: z.array(groupSchema),
	}),
});
