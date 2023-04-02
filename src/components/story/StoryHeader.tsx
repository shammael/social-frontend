import React, { Suspense } from 'react';
import { HTMLAttributes, PropsWithChildren, useContext } from 'react';
import { IoBook } from 'react-icons/io5';
import { MdSmartDisplay } from 'react-icons/md';
import { StorySkeleton } from '../skeletons';
import StoryContext from './context/story.context';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const Button = ({ children, active, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`gap-1 w-full flex justify-center items-center border-b-[2.5px] ${
        active && 'border-blue-400'
      } `}
    >
      <div
        className={`rounded-md flex gap-2  w-full justify-center py-2 my-1 items-center ${
          active
            ? 'border-blue-500'
            : 'border-slate-400 hover:bg-neutral-200 hover:bg-opacity-30'
        }`}
      >
        {children}
      </div>
    </button>
  );
};

const Tab = ({ children }: PropsWithChildren) => {
  const { activeTab, setTab } = useContext(StoryContext);

  const activeTabComponent = React.Children.toArray(children).filter(
    (child, index) => activeTab === index
  )[0] as React.ReactElement<any>;

  return (
    <>
      <div className="w-full flex px-3">
        <Button
          active={activeTab === 1}
          onClick={() => {
            setTab(1);
          }}
        >
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
        </Button>
        <Button active={activeTab === 2} onClick={() => setTab(2)}>
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
        </Button>
      </div>
      <Suspense fallback={<StorySkeleton />}>{activeTabComponent}</Suspense>
    </>
  );
};

export function TabItem({ children }: PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>;
}

const StoryHeader = ({ children }: PropsWithChildren) => {
  const { activeTab, setTab } = useContext(StoryContext);
  return <Tab>{children}</Tab>;
};

export default StoryHeader;
