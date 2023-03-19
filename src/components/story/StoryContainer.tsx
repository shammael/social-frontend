import IStory from '@/interfaces/story.interface';
import { TRootState } from '@/utils/redux-toolkit';
import { useSelector } from 'react-redux';
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
    id: 's-5',
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
    id: 's-4',
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
    id: 's-3',
  },
];

const StoryContainer = () => {
  const { user } = useSelector((state: TRootState) => state.user);
  return (
    <Container className="flex flex-row gap-2 overflow-x-scroll">
      <AddStory
        imgUrl={
          user?.picturePath
            ? user?.picturePath
            : 'https://storage.googleapis.com/media.clinicavisualyauditiva.com/images/2019/11/211fd983-default-user-image.png'
        }
      />
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
