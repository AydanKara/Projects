import Title from "@/components/UI/Title";
import Input from "@/components/form/input";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/register";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Your Full Name",
        value: values.fullName,
        errorMessage: errors.fullName,
        touched: touched.fullName,
      },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
        id: 3,
        name: "passwordConfirm",
        type: "password",
        placeholder: "Confirm Password",
        value: values.passwordConfirm,
        errorMessage: errors.passwordConfirm,
        touched: touched.passwordConfirm,
      },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 lg:w-1/2 sm:w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Register</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="btn-primary">REGISTER</button>
            <Link href="/auth/login">
              <span className="text-xs underline text-secondary">
                Do you have a account?
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
