import zod from "zod";
import { fromError } from "zod-validation-error";

export const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, "Password must be at least 8 characters"),
});

export const registerSchema = zod.object({
  nama_lengkap: zod.string().min(3, "Name must be at least 3 characters"),
  tanggal_lahir: zod.string().min(8, "Date must be at least 8 characters"),
  no_telepon: zod.string().min(9, "Phone must be at least 9 characters"),
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

export function registerSchemaValidation({nama_lengkap, tanggal_lahir, no_telepon, email, password}) {
  try {
    registerSchema.parse({nama_lengkap, tanggal_lahir, no_telepon, email, password});
    return null;
  } catch (error) {
    const validationError = fromError(error);
    // console.error(validationError.details.map(issue => issue.message));
    return validationError.details.map(issue => issue.message);
  }
}