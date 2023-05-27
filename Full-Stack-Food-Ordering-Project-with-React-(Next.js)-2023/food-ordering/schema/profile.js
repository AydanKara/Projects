import * as Yup from "yup";

export const accountSettingsSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 characters."),
  address: Yup.string().required("Your Address is required."),
  job: Yup.string().required("Your Job is required."),
  bio: Yup.string().required("Your Bio is required."),
});
