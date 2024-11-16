const Input = ({
  id,
  label,
  value,
  onChange,
  error,
  success,
  variant = 'default', // Menambahkan prop variant dengan nilai default
  type = 'text',
  defaultValue,
  placeholder,
}) => {
  // Menambahkan className berdasarkan nilai variant
  const inputClass = `py-3 px-4 block w-full text-sm rounded-lg focus:outline-none focus:ring ${
    variant === 'neutral'
      ? 'pe-9 bg-neutral text-white border-gray focus:ring-gray focus:border-0 disabled:opacity-50 disabled:pointer-events-none border-gray rounded-lg border-2'
      : 'border border-gray-300 focus:border-secondary focus:ring-secondary disabled:opacity-50 disabled:pointer-events-none'
  } ${
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
  } ${success ? 'border-teal-500 focus:border-teal-500 focus:ring-teal-500' : ''}`;

  const helperText = error 
    ? <p className="text-sm text-red-600 mt-2">{error}</p>
    : success 
      ? <p className="text-sm text-teal-600 mt-2">Looks good!</p>
      : null;

  const icon = error 
    ? (
      <svg className="shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" x2="12" y1="8" y2="12"></line>
        <line x1="12" x2="12.01" y1="16" y2="16"></line>
      </svg>
    ) 
    : success 
      ? (
      <svg className="shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ) 
    : null;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={inputClass}
          required
          aria-describedby={`${id}-helper`}
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
          {icon}
        </div>
      </div>
      {helperText}
    </div>
  );
};

export default Input;
