import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  imgUrl?: string;
  cursor?: boolean;
  size?: 'small' | 'normal' | 'big';
  online?: boolean;
  name?: string;
  borderColor?: string;
}

const Avatar = ({
  imgUrl,
  cursor = false,
  size = 'normal',
  online = false,
  name,
  className,
  borderColor = 'border-blue-500',
}: IProps) => {
  const nameFormat = name?.split(' ') || [];
  return (
    <div className={`${className}`}>
      <div
        className={`${cursor ? 'cursor-pointer' : ''} ${
          size === 'normal' ? 'h-10 w-10' : size === 'small' ? 'h-8 w-8' : ''
        }
      rounded-full overflow-clip dark:border-neutral-300  border-[3px] ${borderColor}`}
      >
        {imgUrl ? (
          <img className="h-full w-full object-cover" src={imgUrl} />
        ) : name ? (
          <p>
            {nameFormat[0]} {nameFormat[1]}
          </p>
        ) : null}
      </div>
      {online && (
        <div className="h-2 w-2 bg-green-400 rounded-full absolute bottom-1 border-white "></div>
      )}
    </div>
  );
};

export default Avatar;
