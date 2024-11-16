import Swal from 'sweetalert2';

export const showAlert = ({ icon = 'success', title = 'Success', text = '', confirmButtonColor = 'bg-green-600' }) => {
  return Swal.fire({
    icon,
    title,
    text,
    customClass: {
      confirmButton: `${confirmButtonColor} hover:bg-green-700 text-white font-bold py-2 px-4 rounded`,
    },
    buttonsStyling: false,
  });
};