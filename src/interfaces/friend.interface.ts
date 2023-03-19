import IUser from './user.interface';

interface IFriend
  extends Pick<
    IUser,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'location'
    | 'occupation'
    | 'online'
    | 'picturePath'
    | 'id'
  > {}

export default IFriend;
