import { z } from 'zod';

export const accountPaymentSchema = z.object({
  card_number: z.string(),
  cvv: z.string().length(3, 'Invalid CVV'),
  exp_month: z.string().length(2).min(1).max(12),
  exp_year: z.string().length(4)
});

export const accountDetailSchema = z.object({
  first_name: z.string(),
  last_name: z.string().optional(),
  email: z.string().email(),
});

export const paymentSchema = accountDetailSchema.merge(accountPaymentSchema);
