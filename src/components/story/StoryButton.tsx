import { MouseEventHandler, PropsWithChildren } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

const StoryButton = ({
  children,
  onClick,
  isActive,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`gap-1 w-full flex justify-center items-center border-b-[2.5px] ${
        isActive && 'border-blue-400'
      } `}
    >
      <div
        className={`rounded-md flex gap-2  w-full justify-center py-2 my-1 items-center ${
          isActive
            ? 'border-blue-500'
            : 'border-slate-400 hover:bg-neutral-200 hover:bg-opacity-30'
        }`}
      >
        {children}
      </div>
    </button>
  );
};

export default StoryButton;
