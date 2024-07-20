import { z } from 'zod';

export const EnquiryDataSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(), 
  dialingCode: z.string(),
  phoneNumber: z.string(),
  message: z.string(),
  listingId: z.string(),
  ownedBy: z.string(),
});

export type EnquiryDataType = z.infer<typeof EnquiryDataSchema>;