import { PropsWithChildren, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  badge?: boolean;
  dimensions: {
    height: string;
    width: string;
  };
}

const IconButton = (props: PropsWithChildren<Props>) => {
  const removeProp1 = 'badge';
  const removeProp2 = 'dimensions';
  const {
    [removeProp1]: remove,
    [removeProp2]: remove2,
    ...renderingProps
  } = props;
  return (
    <div
      className={`relative ${props.dimensions.width} ${props.dimensions.height} rounded-full h-10 w-10 hover:bg-blue-300 hover:bg-opacity-50 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40 rounded-r-full flex items-center`}
    >
      {props.badge ? (
        <div className="bg-red-500 rounded-full text-xs h-5 w-5 text-white flex text-center justify-center leading-none items-center absolute z-10 top-1 rigth-0">
          +9
        </div>
      ) : null}
      <button {...renderingProps} />
    </div>
  );
};

export default IconButton;
