import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(5, "Password must be at least 5 characters"),
});
