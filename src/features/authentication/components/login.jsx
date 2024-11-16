import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import Input from "../../../components/Input.jsx";
import { AuthLayout } from "./auth.layout.jsx";
import useLogin from "../hooks/useLogin.jsx";
import useUser from "../../../store/userStore.js";
import { Navigate } from "react-router-dom";
import viewEye from "../../../assets/view.png"
import { useState } from "react";
import hideEye from "../../../assets/hide.png"

export default function Login() {
  const { loading, error, errorEmail, errorPassword, handleLogin } = useLogin();
  const {user} = useUser();
  const [isHidePassword, setIsHidePassword] = useState(true);

  if(user) {
    return <Navigate to="/prompt" />
  }

  const handleHidePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  return (
    <div>
      <AuthLayout>
        <div className="w-[300px] space-y-4">
          <section className="space-y-2">
            <h3 className="font-bold">Login</h3>
            <p className="text-sm">Enter your email and password</p>
          </section>
          <form className="space-y-3" onSubmit={handleLogin} noValidate>
            <Input id="email" label="Email" type="email" placeholder="Email" />
            <p className="text-xs text-red-600">{errorEmail}</p>
            <div className="relative">
              <Input id="password" label="Password" type={isHidePassword ? "password" : "text"} placeholder="Password" />
              <div className="absolute right-0 bottom-1">
                <Button variant="" onClick={handleHidePassword}>
                  {isHidePassword ? <img src={hideEye} alt="hide" className="w-5" /> : <img src={viewEye} alt="view" className="w-5" />}
                </Button>
              </div>
            </div>
            <p className="text-xs text-red-600">{errorPassword}</p>
            <Button size="small" fullWidth type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
          {error && <p className="text-xs font-semibold text-red-600 text-center">{error}</p>}
          <p className="text-sm">Don&apos;t have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
        </div>
      </AuthLayout>
    </div>
  )
}