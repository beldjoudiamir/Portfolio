import { z } from "zod";
import { Errors } from "../utils/errors.js";
import { hasUpperCase, hasNumbers } from "../utils/functions.js";

const EMAIL_SCHEMA = z.string().trim().email();
const PASSWORD_SCHEMA = z
  .string()
  .min(8)
  .refine((v) => {
    if (hasUpperCase(v) && hasNumbers(v)) {
      return true;
    }

    return false;
  }, Errors.ERR_NUM_AND_UPR);

export const registerSchema = z.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const loginSchema = z.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
