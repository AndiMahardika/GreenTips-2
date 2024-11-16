const Button = ({ size = 'default', fullWidth = false, children, onClick, disabled, variant = 'primary', type = 'button' }) => {
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    default: 'py-2 px-4 text-sm',
    large: 'p-4 sm:p-5 text-sm',
  };

  const variantClasses = {
    primary: 'border-transparent bg-primary text-white hover:bg-secondary focus:bg-secondary',
    secondary: 'border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50',
    success: 'border-transparent bg-success text-white focus:bg-green-600',
    danger: 'border-transparent bg-red-600 text-white hover:bg-red-700 focus:bg-red-700',
    info: 'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700',
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-x-2 font-medium rounded-md ${fullWidth ? 'w-full' : ''} ${sizeClasses[size]} ${variantClasses[variant]} disabled:opacity-50 disabled:pointer-events-none`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;