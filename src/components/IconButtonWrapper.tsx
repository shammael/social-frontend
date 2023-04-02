import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  badgeNumber?: number;
}

const IconButtonWrapper = ({ className, children, badgeNumber = 0 }: Props) => {
  return (
    <div
      className={`${className} h-10 w-10 rounded-full shadow-md dark:bg-neutral-700 dark:bg-opacity-40 dark:hover:bg-opacity-80 bg-neutral-300 bg-opacity-20 hover:bg-opacity-60 relative cursor-pointer`}
    >
      <div className="p-1">{children}</div>
      {badgeNumber > 0 ? (
        <div className="bg-red-500 flex justify-center items-center h-5 w-5 absolute -top-1 text-white rounded-full right-0 text-xs p-2">
          {badgeNumber > 9 ? '9+' : badgeNumber}
        </div>
      ) : null}
    </div>
  );
};

export default IconButtonWrapper;
