import { PropsWithChildren, useReducer } from 'react';
import StoryContext from './story.context';
import storyReducer, { IStoryState } from './story.reducer';

const initialState: IStoryState = {
  activeTab: 1,
};

const StoryProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(storyReducer, initialState);

  const setTab = (tabNumber: number) => {
    dispatch({ type: 'Story - Active Tab', payload: tabNumber });
  };

  return (
    <StoryContext.Provider value={{ ...state, setTab }}>
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
