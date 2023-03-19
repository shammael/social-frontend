import { HTMLAttributes } from 'react';
import { HiOutlineMagnifyingGlass as Search } from 'react-icons/hi2';
import IconButtonWrapper from '../IconButtonWrapper';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SearchRoundedButton = ({ className }: Props) => {
  return (
    <IconButtonWrapper>
      <Search className="text-slate-100" size={20} />
    </IconButtonWrapper>
  );
};

export default SearchRoundedButton;
