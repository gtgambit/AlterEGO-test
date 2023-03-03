import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long"),
});
