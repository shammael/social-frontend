import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const StoryAndReelsCard = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={` ${className} relative h-[200px] w-[120px] rounded-lg overflow-clip min-w-[120px] cursor-pointer shadow-md`}
    >
      {children}
    </div>
  );
};

export default StoryAndReelsCard;
