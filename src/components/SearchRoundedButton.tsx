import { HTMLAttributes } from 'react';
import { HiOutlineMagnifyingGlass as Search } from 'react-icons/hi2';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SearchRoundedButton = ({ className }: Props) => {
  return (
    <div
      className={`${className} rounded-full h-8 w-8 flex justify-center
    items-center dark:bg-neutral-700 dark:bg-opacity-40 dark:hover:bg-opacity-80 bg-slate-100 bg-opacity-20 shadow-md cursor-pointer hover:bg-opacity-40`}
    >
      <Search className="text-slate-100" size={15} />
    </div>
  );
};

export default SearchRoundedButton;
