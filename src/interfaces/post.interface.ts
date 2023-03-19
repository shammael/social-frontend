import IUser from './user.interface';

export type TPostReaction =
  | 'Like'
  | 'Love'
  | 'Care'
  | 'Haha'
  | 'Wow'
  | 'Sad'
  | 'Angry';

interface IPost {
  user: Pick<
    IUser,
    | 'email'
    | 'lastName'
    | 'occupation'
    | 'picturePath'
    | 'online'
    | 'firstName'
    | 'id'
  >;
  description: string;
  picturePath?: string;
  likes: {
    user: Pick<
      IUser,
      | 'email'
      | 'lastName'
      | 'occupation'
      | 'picturePath'
      | 'online'
      | 'firstName'
      | 'id'
    >;
    reaction: TPostReaction;
  }[];
  comments: IPost[];
  createdAt: string;
  updatedAt: string;
  status: 'pending' | 'active' | 'disabled';
  commentFrom?: string;
  id?: string;
}

export default IPost;
