import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const FooterCard = ({ text, className }: Props) => {
  return (
    <p
      className={` absolute ${
        !/(text-)/g.test(className || '') && 'text-gray-500'
      }  font-semibold bottom-0 bg-stone-50 p-2 h-12 text-md overflow-hidden overflow-ellipsis whitespace-nowrap w-full m-auto text-center ${className}`}
    >
      {text}
    </p>
  );
};

export default FooterCard;
