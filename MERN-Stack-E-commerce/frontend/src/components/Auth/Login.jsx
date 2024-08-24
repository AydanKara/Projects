import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        // eslint-disable-next-line no-unused-vars
        const { password, avatar, id, ...restData } = data;

        localStorage.setItem("user", JSON.stringify(restData));
        message.success("Login successful");
        if (restData.role === "admin") {
          window.location.href = "/admin";
        } else {
          navigate("/");
        }
      } else if (response.status === 401) {
        message.error("Email or password incorrect");
      }
    } catch (error) {
      console.error("Register failed. " + error);
    }
  };

  return (
    <div className="account-column">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input type="email" onChange={handleInputChange} name="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="btn btn-sm">Login</button>
        </p>
        <a href="#">Lost your password?</a>
      </form>
    </div>
  );
};

export default Login;
