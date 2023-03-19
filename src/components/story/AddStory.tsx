import { TRootState } from '@/utils/redux-toolkit';
import { GoPlus } from 'react-icons/go';
import { useSelector } from 'react-redux';
import StoryCard from './StoryCard';

interface Props {
  imgUrl: string;
}

const AddStory = ({ imgUrl }: Props) => {
  return (
    <StoryCard className="relative">
      <img src={imgUrl} className="object-cover w-full h-full" />
      <div className="h-[50px] absolute bottom-0 bg-white dark:bg-neutral-800 w-full text-white ">
        <p className="text-center w-full flex items-center justify-center h-full text-neutral-500 text-md font-[600] tracking-wide">
          Create Story
        </p>
        <div className="h-10 w-10 bg-sky-600 absolute bottom-9 m-auto rounded-full dark:border-neutral-800 items-center border-white border-4 flex justify-center left-0 right-0 font-bold text-center -top-3">
          <GoPlus size={20} color="#FFF" />
        </div>
      </div>
    </StoryCard>
  );
};

export default AddStory;
