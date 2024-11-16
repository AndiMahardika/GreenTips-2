import zod from "zod";
import { fromError } from "zod-validation-error";

export const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, "Password must be at least 8 characters"),
});

export const registerSchema = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  email: zod.string().email(),
  password: zod.string().min(8, "Password must be at least 8 characters"),
});

export function loginSchemaValidation({email, password}) {
  try {
    loginSchema.parse({email, password});
    return null;
  } catch (error) {
    const validationError = fromError(error);
    // console.error(validationError.details);
    return validationError.details.map(issue => issue.message);
  }
}

export function registerSchemaValidation({name, email, password}) {
  try {
    registerSchema.parse({name, email, password});
    return null;
  } catch (error) {
    const validationError = fromError(error);
    return validationError.details.map(issue => issue.message);
  }
}