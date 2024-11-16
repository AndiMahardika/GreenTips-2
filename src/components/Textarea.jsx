const TextAreaInput = ({
  label,
  placeholder = 'Type here...',
  rows = 3,
  value,
  defaultValue,
  onChange,
  disabled = false,
  id = 'textarea-input',
  required = true,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-base font-semibold mb-2 text-white">
        {label}
      </label>
      <textarea
        id={id}
        className="py-3 px-4 block w-full border-2 bg-neutral text-white border-gray focus:border-0 rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray disabled:opacity-50 disabled:pointer-events-none"
        rows={rows}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;