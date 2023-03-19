import { TPostReaction } from '@/interfaces/post.interface';
import { PropsWithChildren } from 'react';
import { HiThumbUp as ThumbUpIcon } from 'react-icons/hi';
import { BsFillHeartFill as LoveIcon } from 'react-icons/bs';

interface Props {
  emoji: TPostReaction;
  iconSize?: number;
}

const EmojiContainer = ({ children }: PropsWithChildren) => {
  return <div className="h-5 w-5 rounded-full overflow-hidden">{children}</div>;
};

const Emoji = ({ emoji, iconSize = 10 }: Props) => {
  if (emoji === 'Like') {
    return (
      <EmojiContainer>
        <div className="bg-blue-500 h-full w-full flex justify-center items-center">
          <ThumbUpIcon className="text-white" size={iconSize} />
        </div>
      </EmojiContainer>
    );
  }

  if (emoji === 'Love') {
    return (
      <EmojiContainer>
        <div className="bg-red-600 h-full w-full flex justify-center items-center">
          <LoveIcon className="text-white" size={iconSize} />
        </div>
      </EmojiContainer>
    );
  }

  if (emoji === 'Haha') {
    return (
      <EmojiContainer>
        <p className="bg-slate-200 h-10 w-10">
          <img src="/assets/emoji/tears_of_joy.png" className="h-5 w-5" />
        </p>
      </EmojiContainer>
    );
  }

  return <p>Hola P</p>;
};

export default Emoji;
