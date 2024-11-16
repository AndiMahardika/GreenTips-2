const SelectInput = ({
  label,
  options = [],
  defaultValue,
  onChange,
  disabled = false,
  id = 'select-input',
  required = true,
}) => {
  return (
    <div className="max-w-lg">
      <label htmlFor={id} className="block text-base font-semibold mb-2 text-white">
        {label}
      </label>
      <select
        id={id}
        className="py-3 px-4 pe-9 block w-full bg-neutral text-white border-gray focus:border-0 rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray disabled:opacity-50 disabled:pointer-events-none"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;