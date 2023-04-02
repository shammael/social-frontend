import Container from '../Container';

import { IoBook } from 'react-icons/io5';
import { MdSmartDisplay } from 'react-icons/md';
import { useContext } from 'react';
import Tab from '../Tab';
import StoryContext from '../story/context/story.context';
import StoryContent from '../story/StoryContent';
import ReelsContent from '../reels/ContentReels';

const StoryAndReels = () => {
  const { activeTab, setTab } = useContext(StoryContext);
  return (
    <Container>
      <Tab>
        <Tab.Header>
          <Tab.Button
            onClick={() => {
              setTab(1);
            }}
          >
            <>
              <IoBook
                className={`${
                  activeTab === 1 ? 'text-blue-500' : 'text-slate-400'
                } text-center text-xl`}
              />
              <span
                className={`${
                  activeTab === 1 ? 'text-blue-500' : 'text-slate-400'
                } font-medium`}
              >
                Story
              </span>
            </>
          </Tab.Button>
          <Tab.Button
            onClick={() => {
              setTab(2);
            }}
          >
            <MdSmartDisplay
              className={`${
                activeTab === 2 ? 'text-blue-500' : 'text-slate-400'
              } text-center text-xl`}
            />
            <span
              className={`${
                activeTab === 2 ? 'text-blue-500' : 'text-slate-400'
              } font-medium`}
            >
              Reels
            </span>
          </Tab.Button>
        </Tab.Header>
        <Tab.Body>
          <StoryContent />
          <ReelsContent />
        </Tab.Body>
      </Tab>
    </Container>
  );
};

export default StoryAndReels;
