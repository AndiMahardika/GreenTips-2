import axios from "axios";
// import { BASE_URL_AUTH_API } from "../../../constant/BASE_URL.js";

export default async function registerUser({nama_lengkap, tanggal_lahir, no_telepon, email, password}) {
  try {
    const data = await axios.post("http://13.239.136.180/api/v1/register", {nama_lengkap, tanggal_lahir, no_telepon, email, password});
    console.log("register user", data.data);
    return data.data
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Error registering user.");
  }
}