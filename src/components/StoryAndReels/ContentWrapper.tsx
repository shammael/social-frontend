import { createRef, PropsWithChildren, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const ContentWrapper = ({ children }: PropsWithChildren) => {
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false);
  const [displayRightArrow, setDisplayRightArrow] = useState(true);
  const sliderRef = createRef<HTMLDivElement>();

  const handleScroll = (e: any) => {
    const position = Math.round(e.currentTarget.scrollLeft);
    const maxScrollLeft =
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
    if (position === 0) {
      setDisplayLeftArrow(false);
    } else {
      setDisplayLeftArrow(true);
    }

    if (position === maxScrollLeft) {
      setDisplayRightArrow(false);
    } else {
      setDisplayRightArrow(true);
    }
  };

  const handleClickLeft = () => {
    sliderRef.current!.scrollLeft! = sliderRef.current?.scrollLeft! - 100;
  };

  const handleClickRight = () => {
    sliderRef.current!.scrollLeft! = sliderRef.current?.scrollLeft! + 100;
  };

  return (
    <div className="relative">
      <div
        className="overflow-x-scroll mt-2 relative flex gap-2 w-full py-1"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        <>{children}</>
        {/* <div className="flex gap-2 mt-2 relative w-full "> */}
      </div>
      <div className="absolute w-full top-[40%] bg-red-500 left-0">
        <div
          className={`h-10 w-10 left-0 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer absolute ${
            !displayLeftArrow ? 'hidden' : 'block'
          } `}
          onClick={() => handleClickLeft()}
        >
          <BiChevronLeft size={25} className="text-slate-500" />
        </div>
        <div
          onClick={() => handleClickRight()}
          className={`h-10 w-10 right-0 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer absolute ${
            !displayRightArrow ? 'hidden' : 'block'
          }  `}
        >
          <BiChevronRight size={25} className="text-slate-500" />
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
