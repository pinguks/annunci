interface Props {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<Props> = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-semibold text-black">
        {label}
      </label>

      <div className="mt-1">
        <input
          type={type}
          id={name}
          name={name}
          className="block w-full border-light-gray placeholder-light-gray focus:outline-none focus:ring-tomasi-red focus:border-tomasi-red rounded"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>

      {error && <p className="mt-1 text-sm text-tomasi-red">{error}</p>}
    </div>
  );
};

export default Input;
