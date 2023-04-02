import React, { MouseEventHandler, PropsWithChildren, Suspense } from 'react';
import { useContext } from 'react';
import StoryContext from '../story/context/story.context';
import { StorySkeleton } from '../skeletons';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

const Tab = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

Tab.Header = ({ children }: PropsWithChildren) => {
  const { activeTab, setTab } = useContext(StoryContext);
  const childArray = React.Children.toArray(children);
  return (
    <div className="w-full flex flex-row">
      {childArray.map((child, index) => {
        const isActive = activeTab === index + 1;
        return (
          <button className="w-full" onClick={() => setTab(index + 1)}>
            {React.cloneElement(child as React.ReactElement<any>, {
              isActive,
            })}
          </button>
        );
      })}
    </div>
  );
};

type TabPanelProps = {
  index: number;
  children: React.ReactNode;
};

const TabPanel = ({ index, children }: TabPanelProps) => {
  return <div>{children}</div>;
};

Tab.Body = ({ children }: PropsWithChildren) => {
  const { activeTab } = useContext(StoryContext);

  const childArray = React.Children.toArray(children);
  return (
    <div>
      {childArray.map((child, index) => {
        const isCurrentTab = index + 1 === activeTab;

        if (!isCurrentTab) {
          return null;
        }

        return (
          <Suspense key={index} fallback={<StorySkeleton />}>
            <TabPanel index={index}>{child}</TabPanel>
          </Suspense>
        );
      })}
    </div>
  );
};

Tab.Button = ({ children, onClick, isActive }: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`gap-1 w-full flex justify-center items-center border-b-[2.5px] ${
        isActive && 'border-blue-400'
      } `}
    >
      <div
        className={`rounded-md flex gap-2  w-full justify-center py-2 my-1 items-center ${
          isActive
            ? 'border-blue-500'
            : 'border-slate-400 hover:bg-neutral-200 hover:bg-opacity-30'
        }`}
      >
        {children}
      </div>
    </button>
  );
};

export default Tab;
