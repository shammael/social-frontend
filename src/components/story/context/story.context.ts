import { createContext } from 'react';

interface IStoryContext {
  activeTab: number;

  //Methods
  setTab: (tabNumer: number) => void;
}

const StoryContext = createContext({} as IStoryContext);

export default StoryContext;
