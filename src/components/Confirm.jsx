// src/components/confirmAlert.js
import Swal from 'sweetalert2';

export const confirmAlert = async ({
  title = 'Are you sure?',
  text = '',
  icon = 'warning',
  confirmButtonText = 'Yes, proceed!',
  cancelButtonText = 'Cancel',
  confirmButtonColor = 'bg-blue-600',
  cancelButtonColor = 'bg-gray-200',
}) => {
  return await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      confirmButton: `${confirmButtonColor} text-white font-bold py-2 px-4 rounded`,
      cancelButton: `${cancelButtonColor} text-white font-bold py-2 px-4 rounded`,
    },
    buttonsStyling: false,
  });
};
