import React from "react";
import Title from "../UI/Title";
import Input from "../form/input";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";


const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        passwordConfirm: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "passwordConfirm",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.passwordConfirm,
      errorMessage: errors.passwordConfirm,
      touched: touched.passwordConfirm,
    },
  ];
  return (
    <form
      className="lg:p-10 w-full flex flex-col gap-4 lg:my-0 my-7"
      onSubmit={handleSubmit}
    >
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <div>
        <button className="btn-primary" type="submit">Update</button>
      </div>
    </form>
  );
};

export default Password;
