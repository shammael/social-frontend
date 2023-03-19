import IPost from '@/interfaces/post.interface';
import { fromDistanceToNow } from '@/utils/date';
import Post from './post/Post';
import Spacer from './Spacer';

const newsFeed: IPost[] = [
  {
    createdAt: fromDistanceToNow(new Date()),
    user: {
      email: 'shammamnd2015@gmail.com',
      picturePath:
        'https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE',
      firstName: 'Bien-Aisé',
      lastName: 'Shammael',
      occupation: 'PDG',
      id: '125',
      online: true,
    },
    description: 'Barcelona 😍',
    id: '1',
    likes: [],
    status: 'active',
    updatedAt: new Date().toString(),
    comments: [],
    picturePath: '/assets/img/vaite.jpg',
  },
  {
    createdAt: fromDistanceToNow(new Date()),
    user: {
      email: 'shammamnd2015@gmail.com',
      picturePath:
        'https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE',
      firstName: 'Bien-Aisé',
      lastName: 'Shammael',
      occupation: 'PDG',
      id: '125',
      online: true,
    },
    description: 'Barcelona 😍',
    id: '2',
    likes: [],
    status: 'active',
    updatedAt: new Date().toString(),
    comments: [],
    picturePath: '/assets/img/vaite.jpg',
  },
];

const NewsFeed = () => {
  return (
    <>
      {newsFeed.map(
        ({
          comments,
          createdAt,
          description,
          likes,
          status,
          updatedAt,
          user,
          commentFrom,
          id,
          picturePath,
        }) => (
          <Post
            key={id}
            comments={comments}
            createdAt={createdAt}
            description={description}
            likes={likes}
            status={status}
            updatedAt={updatedAt}
            user={user}
            commentFrom={commentFrom}
            id={id}
            picturePath={picturePath}
          />
        )
      )}
    </>
  );
};

export default NewsFeed;
