import { z } from "zod";

export const PHONE_REGEX =
  /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm

export const contactSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    message: z.string().trim().min(30).max(5000),
    phone: z.string().regex(PHONE_REGEX)
})