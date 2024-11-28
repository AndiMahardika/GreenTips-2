import axios from 'axios';
import instance from './instance.js';
// import { BASE_URL_AUTH_API } from '../../../constant/BASE_URL.js';

// export async function getUsers(){
//   try {
//     const data = await axios.get(BASE_URL_AUTH_API)
//     return data.data
//   } catch (error) {
//     throw new Error("Failed to fetch users.")
//   }
// }

export async function loginUser({email, password}) {
  try {
    const response = await instance.post('/login', { email, password });
    // console.log("login user", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Invalid credentials.");
  }
}

