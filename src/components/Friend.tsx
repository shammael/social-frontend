import IFriend from '@/interfaces/friend.interface';
import Avatar from './Avatar';

interface Props {
  friend: Pick<IFriend, 'picturePath' | 'online' | 'firstName' | 'lastName'>;
}

const Friend = ({ friend }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <Avatar imgUrl={friend.picturePath} size="small" online={friend.online} />
      <p className="text-slate-700 text-sm dark:text-neutral-200 dark:text-opacity-90 font-semibold">
        {friend.firstName} {friend.lastName}
      </p>
    </div>
  );
};

export default Friend;
