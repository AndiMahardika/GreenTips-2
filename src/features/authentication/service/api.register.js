import axios from "axios";
import { BASE_URL_AUTH_API } from "../../../constant/BASE_URL.js";

export default async function registerUser({name, email, password}) {
  try {
    const data = await axios.post(BASE_URL_AUTH_API, {name, email, password});
    console.log("register user", data);
    return data.data
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Error registering user.");
  }
}