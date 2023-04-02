import { PropsWithChildren } from 'react';

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute mt top-0 left-0 bg-white bg-opacity-80 backdrop-blur-sm overflow-hidden">
      <div className="">{children}</div>
    </div>
  );
};

export default Modal;
