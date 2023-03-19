import IStory from '@/interfaces/story.interface';
import Container from '../Container';
import AddStory from './AddStory';
import Story from './Story';

const storyData: IStory[] = [
  {
    imgUrl:
      'https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user: {
      firstName: 'Bagye',
      lastName: 'Jhon',
      picturePath:
        'https://images.pexels.com/users/avatars/318033143/manuel-michael-450.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
      id: '1',
      online: true,
    },
    id: 's-1',
  },
  {
    imgUrl:
      'https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user: {
      firstName: 'Quintero',
      lastName: 'Yoanny',
      picturePath:
        'https://images.pexels.com/users/avatars/318033143/manuel-michael-450.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
      id: '1',
      online: true,
    },
    id: 's-2',
  },
  {
    imgUrl:
      'https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user: {
      firstName: 'Bagyewererewrwe',
      lastName: 'Jhon',
      picturePath:
        'https://images.pexels.com/users/avatars/318033143/manuel-michael-450.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
      id: '1',
      online: true,
    },
    id: 's-2',
  },
  {
    imgUrl:
      'https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user: {
      firstName: 'Bagyewererewrwe',
      lastName: 'Jhon',
      picturePath:
        'https://images.pexels.com/users/avatars/318033143/manuel-michael-450.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
      id: '1',
      online: true,
    },
    id: 's-2',
  },
  {
    imgUrl:
      'https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user: {
      firstName: 'Bagyewererewrwe',
      lastName: 'Jhon',
      picturePath:
        'https://images.pexels.com/users/avatars/318033143/manuel-michael-450.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
      id: '1',
      online: true,
    },
    id: 's-2',
  },
];

const StoryContainer = () => {
  return (
    <Container className="flex flex-row gap-2 overflow-x-scroll">
      <AddStory imgUrl="https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE" />
      {storyData.map((story) => (
        <Story
          key={story.id}
          imgUrl={story.imgUrl}
          user={story.user}
          id={story.id}
        />
      ))}
    </Container>
  );
};

export default StoryContainer;
