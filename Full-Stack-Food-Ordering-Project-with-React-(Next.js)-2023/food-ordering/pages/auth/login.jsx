import Title from "@/components/UI/Title";
import Input from "@/components/form/input";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    actions.resetForm();
    toast.success("Login successfully!");
  };

  useEffect(() => {
    if (session) {
      push("/profile");
    }
  }, [session, push]);

  console.log(session);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 lg:w-1/2 sm:w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
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
            <button className="btn-primary" type="submit">
              LOGIN
            </button>
            <button
              className="btn-primary !bg-[#0e1116] hover:!bg-[#66707b] flex justify-center items-center gap-2"
              type="button"
              onClick={() => signIn("github")}
            >
              <i className="fa fa-github text-xl" aria-hidden="true"></i>GitHub
            </button>
            <Link href="/auth/register">
              <span className="text-xs underline text-secondary">
                Do you no have a account?
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
