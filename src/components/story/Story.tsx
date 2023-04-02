import IStory from '@/interfaces/story.interface';
import Avatar from '../Avatar';
import StoryAndReelsCard from '../StoryAndReels/StoryAndReelsCard';

interface Props extends IStory {}

const Story = ({ imgUrl, user }: Props) => {
  return (
    <StoryAndReelsCard>
      <img src={imgUrl} className="object-cover w-full h-full" />
      <p className="absolute bottom-2 h-8 w-full z-10 text-sm font-[500] text-white px-2 overflow-hidden leading-4 tracking-wide">
        {user.firstName} {user.lastName}
      </p>
      <Avatar
        className="absolute top-3 left-2"
        size="normal"
        imgUrl={user.picturePath}
      />
    </StoryAndReelsCard>
  );
};

export default Story;
