import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const StoryCard = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={` ${className} relative h-[200px] w-[120px] rounded-md overflow-clip min-w-[120px] shadow-lg cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default StoryCard;
