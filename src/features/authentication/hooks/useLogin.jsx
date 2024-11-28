import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchemaValidation } from "../validation/auth.validation.js";
import { loginUser } from "../service/api.login.js";
import useUser from "../../../store/userStore.js";
import { jwtDecode } from "jwt-decode";

export default function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setErrorEmail('');
    setErrorPassword('');
    setError('');

    const dataForm = new FormData(event.target);
    const email = dataForm.get("email");
    const password = dataForm.get("password");

    const validationErrors = loginSchemaValidation({email, password});
    // console.log(validationErrors);
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoading(false);
      validationErrors.map((error, index) => {
        if (error.includes("email")) {
          setErrorEmail(error);
          console.log("email", error);
        } else if (error.includes("Password")) {
          setErrorPassword(error);
          console.log("password", error);
        }
      })
      return;
    }

    // HIT API
    const data = await loginUser({email, password});

    if(!data) {
      setLoading(false);
      return setError("Invalid credentials.");
    }

    // console.log("login user", data.data.token);

    // const token = `token-${data.id}`;
    localStorage.setItem("token", data.data.token);
    // exclude token
    // const decode = jwtDecode(data.data.token);
    // console.log("decode", decode);

    const dataUser = {
      id: data.data.id_user,
      name: data.data.nama_lengkap,
      email: data.data.email,
    }
    // console.log("data user", dataUser);

    setUser(data.data);

    navigate("/prompt");
  }

  return {loading, errorEmail, errorPassword, error, handleLogin};
}