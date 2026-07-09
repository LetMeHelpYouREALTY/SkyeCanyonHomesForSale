import { z } from 'zod';

export const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Valid email is required').max(255),
  phone: z.string().max(30).optional().nullable(),
  message: z.string().max(5000).optional().nullable(),
  timeframe: z.string().max(100).optional().nullable(),
  priceRange: z.string().max(100).optional().nullable(),
  source: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
