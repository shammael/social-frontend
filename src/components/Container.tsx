import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}

const Container = ({
  children,
  className,
  orientation = 'vertical',
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`dark:bg-[#1A1A1A] ${
        !/(bg-)/g.test(className || '') && 'bg-white'
      } shadow-md ${!/(px-)/g.test(className || '') && 'px-3'} ${
        !/(py-)/g.test(className || '') && 'py-3'
      } ${className?.includes('flex-row') ? 'flex-row' : 'flex-col'} ${
        !/(rounded-)/g.test(className || '') && 'rounded-md'
      }  flex ${!/(h-)/g.test(className || '') && 'h-fit'} w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
