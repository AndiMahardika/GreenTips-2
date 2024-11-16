import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchemaValidation } from "../validation/auth.validation.js";
import { loginUser } from "../service/api.login.js";
import useUser from "../../../store/userStore.js";

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

    const token = `token-${data.id}`;
    localStorage.setItem("token", token);
    setUser(data);

    navigate("/prompt");
  }

  return {loading, errorEmail, errorPassword, error, handleLogin};
}