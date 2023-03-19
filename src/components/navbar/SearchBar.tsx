import { HTMLAttributes } from 'react';
import { HiOutlineMagnifyingGlass as Search } from 'react-icons/hi2';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SearchBar = ({ className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search..."
        className="dark:bg-neutral-500 dark:bg-opacity-30 dark:text-neutral-100 placeholder:dark:text-neutral-300 px-2 py-1 rounded-md outline-none placeholder:font-light placeholder:text-sm font-light placeholder:text-gray-400 text-sm text-gray-400"
      />
      <button className="h-full absolute top-0 cursor-pointer right-1 dark:text-neutral-200 text-gray-600">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
