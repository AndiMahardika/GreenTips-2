import { useState } from "react";
import { fetchTips, fetchTipsGemini } from "../api/api-tips.jsx";

export default function useTips() {
  const [type, setType] = useState('');
  const [trash, setTrash] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultTips, setResultTips] = useState({});

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleTrashChange = (event) => {
    setTrash(event.target.value);
  }

  async function handleGenerateTips(event) {
    event.preventDefault();
    setResultTips({});
    setLoading(true);
    try {
      // const response = await fetchTipsGemini(type, trash);
      const response = await fetchTips(type, trash);
      setResultTips(response);
    } catch (error) {
      console.error("Error generating tips:", error);
    } finally {
      setLoading(false);
    }
  }

  return { type, trash, loading, resultTips, handleTypeChange, handleTrashChange, handleGenerateTips };
}