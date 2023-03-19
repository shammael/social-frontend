import IFriend from '@/interfaces/friend.interface';
import Container from './Container';
import Divider from './Divider';
import Friend from './Friend';

const friends: Pick<
  IFriend,
  'picturePath' | 'online' | 'firstName' | 'lastName' | 'id'
>[] = [
  {
    firstName: 'Bradley',
    lastName: 'August',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-1',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-2',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-3',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-4',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-5',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-6',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-8',
  },
  {
    firstName: 'James',
    lastName: 'Casey',
    online: true,
    picturePath:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id: 'f-7',
  },
];

const FriendsList = () => {
  return (
    <Container>
      <h3 className="text-sm text-slate-400 dark:text-neutral-200">
        Contact online List
      </h3>
      <Divider />
      <div className="overflow-scroll h-64">
        {friends.map((friend) => (
          <div
            className="dark:hover:bg-neutral-700 dark:hover:bg-opacity-25 hover:bg-slate-100 hover:bg-opacity-60 px-1 py-1 rounded-md cursor-pointer"
            key={friend.id}
          >
            <Friend friend={friend} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FriendsList;
