import FooterCard from './FooterCard';
import { MdOutlineClose as CloseIcon } from 'react-icons/md';

const LoginCard = () => {
  return (
    <div className="relative h-full">
      <img
        className="w-full h-full object-cover"
        src="https://pbs.twimg.com/profile_images/1620741800708259843/QjFgkret_400x400.jpg"
      />
      <FooterCard text="Shammael Bien-Aisé" />
      <div className="h-4 w-4 rounded-full absolute top-1 left-1 bg-white bg-opacity-20 flex items-center justify-center leading-none">
        <CloseIcon className="text-white text-opacity-70" />
      </div>
    </div>
  );
};

export default LoginCard;
