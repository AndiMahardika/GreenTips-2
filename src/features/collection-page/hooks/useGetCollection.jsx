import { useState } from "react";
import { fetchCollections } from "../api/api-collectons.js";
import useUser from "../../../store/userStore.js";

export default function useGetCollection() {
  const { user } = useUser()
  // console.log(user)

  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getCollections() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchCollections();
      const data = res.filter(collection => collection.email === user.email);
      setCollections(data);
    } catch (err) {
      console.error("Error fetching collections:", err);
      setError("Failed to fetch collections. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return { collections, isLoading, error, getCollections };
}