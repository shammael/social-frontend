export interface IStoryState {
  activeTab: number;
}

type ActionType = { type: 'Story - Active Tab'; payload: number };

const storyReducer = (state: IStoryState, action: ActionType): IStoryState => {
  switch (action.type) {
    case 'Story - Active Tab':
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default storyReducer;
