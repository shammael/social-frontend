import IPost from '@/interfaces/post.interface';
import Avatar from '../Avatar';
import Container from '../Container';
import {
  HiOutlineEllipsisHorizontal as EllipsisHoriIcon,
  HiOutlineChatBubbleBottomCenter as CommentIcon,
  HiOutlineChatBubbleBottomCenter as BubbleCommentIcon,
} from 'react-icons/hi2';
import { TbShare3 as ShareIcon } from 'react-icons/tb';
import { PropsWithChildren } from 'react';
import { GoThumbsup as ThinThumbIcon } from 'react-icons/go';
import Emoji from '../Emoji';
import Divider from '../Divider';
import { useSelector } from 'react-redux';
import { TRootState } from '@/utils/redux-toolkit';

interface Props extends IPost {}

const ReactionButtonContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex cursor-pointer hover:bg-slate-200 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40 w-full justify-center items-center rounded-md lg:px-3 lg:py-2 px-1 py-1 gap-2">
      {children}
    </div>
  );
};

const Post = ({
  user: userPost,
  createdAt,
  description,
  picturePath,
}: Props) => {
  const { user } = useSelector((state: TRootState) => state.user);
  return (
    <Container className="w-[600px]">
      <header className="flex gap-2 justify-between items-center">
        <Avatar imgUrl={userPost.picturePath} />
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-slate-600 dark:text-neutral-200 text-md tracking-wider  font-bold leading-none ">
            {userPost.firstName} {userPost.lastName}
          </h3>
          <span className="text-slate-500 dark:text-neutral-200 dark:text-opacity-60 text-[13px] font-medium">
            {createdAt}
          </span>
        </div>
        <button className="h-8 w-8 rounded-full flex hover:bg-slate-100 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40 justify-center">
          <EllipsisHoriIcon
            color='"#FFF'
            size={30}
            className="text-slate-400 dark:text-white"
          />
        </button>
      </header>
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-slate-700 dark:text-neutral-300 font-medium text-md tracking-wide">
          {description}
        </p>
        <img
          src={picturePath}
          alt="post picture"
          className="w-full h-full max-h-[350px] overflow-hidden rounded-md object-cover"
        />
      </div>
      <footer className="my-2">
        <div className="flex justify-between h-8">
          <div className="flex gap-1 items-center">
            <div className="flex">
              <Emoji emoji="Like" iconSize={12} />
              <Emoji emoji="Love" />
              <Emoji emoji="Haha" />
            </div>
            <p className="text-slate-700 dark:text-neutral-300 text-sm">
              2.5K Likes
            </p>
          </div>
          <div className="flex gap-1">
            <div className="flex justify-center items-center gap-1">
              <p className="text-slate-700 text-sm dark:text-neutral-300">
                12K
              </p>{' '}
              <CommentIcon className="text-slate-600 dark:text-neutral-300" />
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-slate-700 text-sm dark:text-neutral-300">2K</p>{' '}
              <ShareIcon className="text-slate-600 dark:text-neutral-300" />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-center gap-2">
          <ReactionButtonContainer>
            <ThinThumbIcon className="text-slate-500 dark:text-neutral-200" />
            <p className="text-slate-700 dark:text-neutral-200 text-sm">Like</p>
          </ReactionButtonContainer>
          <ReactionButtonContainer>
            <BubbleCommentIcon className="text-slate-500 dark:text-neutral-200" />
            <p className="text-slate-700 dark:text-neutral-200 text-sm">
              Comment
            </p>
          </ReactionButtonContainer>
          <ReactionButtonContainer>
            <ShareIcon className="text-slate-500 dark:text-neutral-200" />
            <p className="text-slate-700 dark:text-neutral-200 text-sm">
              Share
            </p>
          </ReactionButtonContainer>
        </div>
        <Divider />
        <div className="flex gap-2">
          <Avatar
            imgUrl={
              user?.picturePath
                ? user?.picturePath
                : 'https://storage.googleapis.com/media.clinicavisualyauditiva.com/images/2019/11/211fd983-default-user-image.png'
            }
          />
          <input
            type="text"
            className="bg-slate-100 dark:bg-neutral-500 dark:bg-opacity-30 h-10 rounded-md outline-none placeholder:text-sm px-2 text-sm text-slate-500 flex-1 dark:text-neutral-200 font-normal placeholder:dark:text-neutral-400"
            placeholder="Write your comment"
          />
        </div>
      </footer>
    </Container>
  );
};

export default Post;
