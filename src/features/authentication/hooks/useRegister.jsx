import { useState } from "react";
import { registerSchemaValidation } from "../validation/auth.validation.js";
// import { getUsers } from "../service/api.login.js";
import registerUser from "../service/api.register.js";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorDate, setErrorDate] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleRegister(event) {
    event.preventDefault();

    setLoading(true);
    setErrorName('');
    setErrorDate('');
    setErrorPhone('');
    setErrorEmail('');
    setErrorPassword('');
    setError('');
    setIsRegistered(false);

    const dataForm = new FormData(event.target);
    const nama_lengkap = dataForm.get("name");
    const tanggal_lahir = dataForm.get("date");
    const no_telepon = dataForm.get("phone");
    const email = dataForm.get("email");
    const password = dataForm.get("password");

    // VALIDATION
    const validationErrors = registerSchemaValidation({nama_lengkap, tanggal_lahir, no_telepon, email, password});
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoading(false);
      validationErrors.map((error, index) => {
        if (error.includes("Name")) {
          setErrorName(error);
        }
        if (error.includes("Date")) {
          setErrorDate("Required");
        }
        if (error.includes("Phone")) {
          setErrorPhone(error);
        }
        if (error.includes("email")) {
          setErrorEmail(error);
        } 
        if (error.includes("Password")) {
          setErrorPassword(error);
        }
      })
      return;
    }

    // check if email already exists
    // const users = await getUsers();
    // const emailExists = users.some(user => user.email === email);
    // if (emailExists) {
    //   console.log("Email already exists");
    //   setError("Email already exists.");
    //   setLoading(false);
    //   return;
    // }

    // HIT API
    const data = await registerUser({nama_lengkap, tanggal_lahir, no_telepon, email, password});
    if(data) {
      setIsRegistered(true);
      setLoading(false);
    }
  }

  return {loading, errorEmail, errorDate, errorPhone, errorPassword, error, errorName,isRegistered, handleRegister};
}