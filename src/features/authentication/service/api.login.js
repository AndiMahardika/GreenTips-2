import axios from 'axios';
import { BASE_URL_AUTH_API } from '../../../constant/BASE_URL.js';

export async function getUsers(){
  try {
    const data = await axios.get(BASE_URL_AUTH_API)
    return data.data
  } catch (error) {
    throw new Error("Failed to fetch users.")
  }
}

export async function loginUser({email, password}) {
  try {
    const users = await getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    return user;
  } catch (error) {
    throw new Error("Invalid credentials.");
  }
}

