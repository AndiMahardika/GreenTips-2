import { useEffect } from "react";
import { useState } from "react";
import { saveToCollection } from "../api/api-tips.jsx";
import useUser from "../../../store/userStore.js";
import { showAlert } from "../../../components/Alert.jsx";

export default function useSave(resultTips) {
  const { user } = useUser()

  const [title, setTitle] = useState("");
  const [tools, setTools] = useState("");
  const [processSteps, setProcessSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [loadingSave, setLoadingSave] = useState(false);

  useEffect(() => {
    if (resultTips) {
      setTitle(resultTips.title || "");
      setTools(resultTips.tools || "");
      setProcessSteps(resultTips.ProcessStep || "");
      setNotes(resultTips.notes || "");
    }
  }, [resultTips]);

  async function handleSaveToCollection(event) {
    event.preventDefault();

    const data = {
      title,
      tools,
      processSteps,
      notes,
      email: user.email
    };

    setLoadingSave(true);
    try {
      await saveToCollection(data, setLoadingSave);
    } catch (error) {
      console.error("Error saving to collection:", error);
      showAlert({ icon: 'error', title: 'Error', text: 'Failed to save data.' });
    } finally {
      setLoadingSave(false);
    }
  }

  return {title, tools, processSteps, notes, loadingSave, setTitle, setTools, setProcessSteps, setNotes,handleSaveToCollection};
}
