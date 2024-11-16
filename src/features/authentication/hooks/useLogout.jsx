import { useNavigate } from "react-router-dom";
import useUser from "../../../store/userStore.js";
import { confirmAlert } from "../../../components/Confirm.jsx";

export default function useLogout() {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  async function handleLogout() {
    const confirm = await confirmAlert({
      title: 'Are you sure?',
      text: 'Do you really want to sign out?',
      confirmButtonText: 'Yes, sign me out!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: 'bg-red-600 hover:bg-red-700',
      cancelButtonColor: 'bg-blue-600 hover:bg-blue-700 ml-2',
    })

    if (!confirm.isConfirmed) return

    clearUser();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return { handleLogout }
}