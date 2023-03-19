import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className }: Props) => {
  return <h1 className={className}>Social</h1>;
};

export default Logo;
