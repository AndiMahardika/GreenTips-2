import { useState } from 'react';
import { deleteCollection } from '../api/api-collectons.js';
import { showAlert } from '../../../components/Alert.jsx';
import { confirmAlert } from '../../../components/Confirm.jsx';

export default function useDeleteCollection(getCollections) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  async function handleDelete(id, title) {
    const confirmation = await confirmAlert({
      title: 'Are you sure?',
      text: `Do you really want to delete "${title}"? This action cannot be undone.`,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: 'bg-red-600 hover:bg-red-700',
      cancelButtonColor: 'bg-blue-600 hover:bg-blue-700 ml-2',
    });

    if (!confirmation.isConfirmed) return;
    
    setIsLoadingDelete(true);
    try {
      const res = await deleteCollection(id);
      if (res) {
        showAlert({ icon: 'success', title: 'Success', text: `"${title}" successfully deleted.` });
      }
      getCollections();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return { handleDelete, isLoadingDelete };
}
