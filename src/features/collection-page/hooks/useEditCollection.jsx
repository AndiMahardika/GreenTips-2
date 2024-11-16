import { useState } from 'react'
import { updateCollection } from '../api/api-collectons.js'
import { showAlert } from '../../../components/Alert.jsx'
import { confirmAlert } from '../../../components/Confirm.jsx'

export default function useEditCollection() {
  const [title, setTitle] = useState("")
  const [tools, setTools] = useState("")
  const [processSteps, setProcessSteps] = useState("")
  const [notes, setNotes] = useState("")
  const [isLoadingUpdate, setLoadingUpdate] = useState(false)

  function handleEditTitle(event) {
    setTitle(event.target.value);
  }

  function handleEditTools(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setTools(stringToArray)
  }

  function handleEditProcessSteps(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setProcessSteps(stringToArray)
  }

  function handleEditNotes(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setNotes(stringToArray)
  }

  async function handleSaveEdit(event, id) {
    event.preventDefault();

    const data = {
      title,
      tools,
      processSteps,
      notes,
    };

    const confirmation = await confirmAlert({
      title: 'Are you sure?',
      text: `Do you really want to update "${title}"?`,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: 'bg-blue-600 hover:bg-blue-700',
      cancelButtonColor: 'bg-red-600 hover:bg-red-700 ml-2',
    });

    if (!confirmation.isConfirmed) return;
    
    setLoadingUpdate(true);
    try {
      const res = await updateCollection(id, data);
      if (res) {
        showAlert({ icon: 'success', title: 'Success', text: `"${title}" successfully Updated.` });
      }
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setLoadingUpdate(false);
    }
  }  

  return { title, isLoadingUpdate, setTitle, setTools, setProcessSteps, setNotes, handleEditTitle, handleEditTools, handleEditProcessSteps, handleEditNotes, handleSaveEdit }
}
