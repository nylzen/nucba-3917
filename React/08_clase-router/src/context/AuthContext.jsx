import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// Crearlo
// Proveer el contexto (provider con la data)
// Usarlo useContext

export const AuthContext = createContext();

const initialState = {
  username: "",
  password: "",
};

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(isAuth ? localStorage.getItem("user") : "");

  const navigate = useNavigate();
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

    setUser(form.username);
    setForm(initialState);
    setIsAuth(true);

    localStorage.setItem("user", form.username);
    navigate(`/user/${form.username}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setIsAuth(false);
    setUser("");
  };

  const data = { handleLogout, handleChange, handleSubmit, isAuth, form, user };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
