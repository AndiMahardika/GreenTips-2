import axios from "axios";
import { BASE_URL_PROMPT_API } from "../../../constant/BASE_URL.js";

export async function fetchCollections() {
  try {
    const response = await axios.get(BASE_URL_PROMPT_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw new Error("Failed to fetch collections.");
  }
}

export async function deleteCollection(id) {
  try {
    const response = await axios.delete(`${BASE_URL_PROMPT_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting collection:", error);
    throw new Error("Failed to delete collection.");
  }
}

export async function getDataById(id) {
  try {
    const response = await axios.get(`${BASE_URL_PROMPT_API}/${id}`);
    if (!response.status === 200) {
      throw new Error("Data not found.");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data by id:", error);
    return null;
  }
}

export async function updateCollection(id, data) {
  try {
    const response = await axios.put(`${BASE_URL_PROMPT_API}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw new Error("Failed to update data.");
  }
}