import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = (props: Props) => {
  const removeProp1 = 'error';
  const removeProp2 = 'className';
  const {
    [removeProp1]: remove,
    [removeProp2]: remove1,
    ...renderingProps
  } = props;
  return (
    <div className="relative flex flex-col">
      <input
        className={`${
          props.error && 'border-red-500'
        } h-12 w-full border-2 bg-neutral-50 outline-blue-400 rounded-md px-2`}
        {...renderingProps}
      />
      {props.error && (
        <div className="text-sm mt-1 text-red-500">{props.error}</div>
      )}
    </div>
  );
};

export default Input;
