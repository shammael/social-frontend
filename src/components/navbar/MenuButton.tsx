import IconButtonWrapper from '../IconButtonWrapper';
import { HiBars3 as MenuIcon } from 'react-icons/hi2';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MenuButton = ({ className }: Props) => {
  return (
    <IconButtonWrapper className="flex justify-center items-center">
      <MenuIcon className="text-white" size={20} />
    </IconButtonWrapper>
  );
};

export default MenuButton;
