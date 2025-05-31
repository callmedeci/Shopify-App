import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters' })
      .max(64, { message: 'Name cannot be longer than 64 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    message: z
      .string()
      .min(3, { message: 'Message cannot be less than 3 characters' })
      .max(2250, { message: 'Message cannot exceed 2250 characters' }),
  })
  .partial()
  .required();
