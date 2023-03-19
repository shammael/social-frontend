import { InputHTMLAttributes, ReactNode } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | ReactNode;
}

const Input = ({
  onBlur,
  onChange,
  placeholder,
  value,
  type,
  id,
  error,
  className,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={` ${className} outline-1 outline-sky-300  py-3 px-3 rounded-md border`}
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && (
        <span className="text-md font-medium text-red-400">{error}</span>
      )}
    </div>
  );
};

export default Input;
