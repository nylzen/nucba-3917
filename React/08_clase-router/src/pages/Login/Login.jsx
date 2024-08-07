import { Card } from "../Home/HomeStyles";
import { Button, LoginContainer, LoginForm } from "./LoginStyles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

function Login() {
  const { handleSubmit, handleChange, isAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

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
