import StoryCard from './StoryCard';

interface Props {
  imgUrl: string;
}

const AddStory = ({ imgUrl }: Props) => {
  return (
    <StoryCard className="relative">
      <img src={imgUrl} className="object-cover w-full h-full" />
      <div className="h-[50px] absolute bottom-0 bg-neutral-800 w-full text-white ">
        <p className="text-center w-full flex items-center justify-center h-full text-neutral-200 text-md font-[500] tracking-wide">
          Create Story
        </p>
        <div className="h-8 w-8 bg-sky-600 absolute bottom-9 m-auto rounded-full border-neutral-800 border-4 flex justify-center left-1/4 right-1/4 font-bold">
          +
        </div>
      </div>
    </StoryCard>
  );
};

export default AddStory;
