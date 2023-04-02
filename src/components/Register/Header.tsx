import { IoCloseSharp } from 'react-icons/io5';

interface Props {
  onClose: () => void;
}

const Header = ({ onClose }: Props) => {
  return (
    <div className="flex flex-row justify-between items-start">
      <div>
        <h2 className="text-3xl font-bold text-slate-500">Sign Up</h2>
        <span className="text-slate-400">It's quick and easy</span>
      </div>
      <button
        type="button"
        className="cursor-pointer rounded-full p-2 hover:bg-neutral-100"
        onClick={() => onClose()}
      >
        <IoCloseSharp size={25} className="text-neutral-400" />
      </button>
    </div>
  );
};

export default Header;
