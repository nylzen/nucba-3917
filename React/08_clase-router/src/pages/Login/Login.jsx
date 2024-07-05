import { useState } from "react";
import { Card } from "../Home/HomeStyles";
import { Button, LoginContainer, LoginForm } from "./LoginStyles";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      alert("Completa los datos, rey");
      return;
    }

    setForm(initialState);
    navigate(`/user/${form.username}`);
  };

  return (
    <LoginContainer>
      <Card>
        <img
          src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/2022-argentinas-lionel-messi-kisses-784174076-3.jpg?strip=all&quality=100&w=1080&h=1080&crop=1"
          alt=""
        />
        <LoginForm>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Login</Button>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
}

export default Login;
