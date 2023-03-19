import FooterCard from './FooterCard';
import { MdOutlineAdd as AddIcon } from 'react-icons/md';

const AddAccountCard = () => {
  return (
    <div className="relative h-full">
      <div className="bg-slate-100 h-full flex justify-center items-center">
        <div
          className="h-12 w-12 bg-sky-600 rounded-full text-white font-bold text-4xl flex justify-center
        items-center -mt-5 shadow-md"
        >
          <AddIcon size={30} />
        </div>
      </div>
      <FooterCard className="text-sky-500" text="Add Account" />
    </div>
  );
};

export default AddAccountCard;
