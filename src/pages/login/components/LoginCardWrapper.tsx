import { PropsWithChildren } from 'react';

const LoginCardWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-56 w-full rounded-md shadow-md overflow-clip cursor-pointer hover:shadow-lg max-w-[180px]">
      {children}
    </div>
  );
};

export default LoginCardWrapper;
