import IGroup from '@/interfaces/group';
import Avatar from '../Avatar';

interface Props {
  group: IGroup;
}

const GroupInfo = ({ group: { id, name, notifications, imgUrl } }: Props) => {
  return (
    <div
      className={`flex items-center gap-2 mt-2  py-1 px-1 rounded-md cursor-pointer ${
        notifications > 0
          ? 'bg-stone-100 dark:bg-neutral-600 dark:bg-opacity-30'
          : null
      } dark:hover:bg-neutral-600 dark:hover:bg-opacity-50 hover:bg-slate-200 hover:bg-opacity-40`}
    >
      <Avatar imgUrl={imgUrl} name={name} size="small" online />
      <p className="dark:text-neutral-300 text-sm text-slate-500">{name}</p>
      {notifications > 0 && (
        <div className="bg-red-500 p-1 rounded-full text-white h-5 w-5 text-xs flex justify-center items-center">
          {notifications > 9 ? '+9' : notifications}
        </div>
      )}
    </div>
  );
};

export default GroupInfo;
