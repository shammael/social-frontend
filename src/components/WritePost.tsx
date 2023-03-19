import Avatar from './Avatar';
import Container from './Container';
import Divider from './Divider';
import { PropsWithChildren } from 'react';
import {
  HiOutlinePhoto as PhotoIcon,
  HiOutlineVideoCamera as VideoCameraIcon,
} from 'react-icons/hi2';

const PostAction = ({ children }: PropsWithChildren) => {
  return (
    <div className="cursor-pointer flex items-center gap-1 px-2 lg:px-7 hover:bg-slate-100 py-2 rounded-md h-auto w-full justify-center dark:hover:bg-neutral-700 dark:hover:bg-opacity-40 ">
      {children}
    </div>
  );
};

const WritePost = () => {
  return (
    <Container>
      <div className="flex gap-2 items-center">
        <Avatar imgUrl="https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE" />
        <input
          type="text"
          className="bg-slate-100 dark:bg-neutral-500 dark:bg-opacity-30 h-10 rounded-md outline-none placeholder:text-sm px-2 text-sm text-slate-500 flex-1 dark:text-neutral-200 font-normal placeholder:dark:text-neutral-400"
          placeholder="What's on your mind"
        />
      </div>
      <Divider />
      <div className="flex gap-2 justify-around">
        <PostAction>
          <PhotoIcon size={22} className="text-green-400" />
          <p className="text-sm text-slate-500 dark:text-neutral-200">
            Foto / Video
          </p>
        </PostAction>
        <PostAction>
          <VideoCameraIcon size={22} className="text-red-400" />
          <p className="text-sm text-slate-500 dark:text-neutral-200">
            Start recording
          </p>
        </PostAction>
      </div>
    </Container>
  );
};

export default WritePost;
