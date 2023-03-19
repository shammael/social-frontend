import IUser from './user.interface';

interface IStory {
  imgUrl: string;
  user: Pick<IUser, 'firstName' | 'online' | 'picturePath' | 'lastName' | 'id'>;
  id: string;
}

export default IStory;
