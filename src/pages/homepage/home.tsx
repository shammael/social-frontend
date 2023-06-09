import Ad from '@/components/Ad';
import Container from '@/components/Container';
import Divider from '@/components/Divider';
import FriendsList from '@/components/FriendsList';
import GroupInfo from '@/components/group/group-info';
import GroupList from '@/components/group/group_list';
import InfoHome from '@/components/InfoHome';
import NewsFeed from '@/components/NewsFeed';
import WritePost from '@/components/post/WritePost';
import { TRootState } from '@/utils/redux-toolkit';
import { setMode } from '@/utils/redux-toolkit/features/mode.slice';
import { useDispatch, useSelector } from 'react-redux';
import StoryProvider from '@/components/story/context/story.provider';
import StoryAndReels from '@/components/StoryAndReels';

const HomePage = () => {
  const theme = useSelector((state: TRootState) => state.mode);
  const dispatch = useDispatch();

  return (
    <div className="px-4 bg-opacity-50 flex gap-2 justify-around h-full">
      <div className="md:flex flex-col gap-2 hidden">
        <InfoHome />
        <GroupList />
      </div>
      <div className="flex flex-col gap-2 overflow-scroll w-full max-w-xl">
        <StoryProvider>
          <StoryAndReels />
        </StoryProvider>
        <WritePost />
        <NewsFeed />
      </div>
      <div className="gap-2 flex-col hidden">
        <Ad />
        <FriendsList />
      </div>
    </div>
  );
};

export default HomePage;
