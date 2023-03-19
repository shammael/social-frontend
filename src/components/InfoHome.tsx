import Avatar from './Avatar';
import IconButton from './IconButton';
import {
  HiOutlineUserPlus as AddUserIcon,
  HiOutlineMapPin as MapPinIcon,
  HiOutlineBriefcase as BriefCaseIcon,
  HiHeart as HeartIconFilled,
} from 'react-icons/hi2';
import Divider from './Divider';
import Spacer from './Spacer';
import { MdOutlineFacebook as FacebookIcon } from 'react-icons/md';
import { TbBrandTwitter } from 'react-icons/tb';
import Container from './Container';
import { colorTokens } from '@/themes';

const InfoHome = () => {
  return (
    <Container className="">
      <header className="flex justify-between w-full items-center">
        <div className="flex gap-2">
          <Avatar imgUrl="https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE" />
          <div className="flex flex-col justify-center">
            <h2 className="dark:text-neutral-100 text-slate-600 leading-[1]">
              Shammael Bien-Aisé
            </h2>
            <p className="dark:text-[#6b6b6b] text-slate-400 text-sm font-medium">
              25 Friends
            </p>
          </div>
        </div>
      </header>
      <Divider />
      <div>
        <div className="flex items-center gap-2">
          <MapPinIcon
            size={18}
            className="dark:text-slate-100  text-neutral-400"
          />
          <p className="dark:text-neutral-300 text-slate-500 text-sm">
            Bridgetown, CA
          </p>
        </div>
        <Spacer />
        <div className="flex items-center gap-2">
          <BriefCaseIcon
            size={18}
            className="dark:text-slate-100  text-neutral-400"
          />
          <p className="dark:text-neutral-300 text-slate-500 text-sm">
            PDG at kalibreakers
          </p>
        </div>
        <Spacer />
        <div className="flex items-center gap-2">
          <HeartIconFilled
            size={18}
            className="dark:text-slate-100  text-neutral-400"
          />
          <p className="dark:text-neutral-300 text-slate-500 text-sm">
            Soltero
          </p>
        </div>
      </div>
      <Divider />
      <div>
        <p className="text-slate-500 dark:text-neutral-300">Social Media</p>
        <Spacer />
        <div className="flex items-center gap-1">
          <FacebookIcon size={18} className="text-blue-500" />
          <a href="#" className="text-blue-400 text-xs">
            @facebook/shammael
          </a>
        </div>
        <Spacer />
        <div className="flex items-center gap-1">
          <TbBrandTwitter size={18} className="text-sky-400" />
          <a href="#" className="text-blue-400 text-xs">
            @twitter/shammael
          </a>
        </div>
      </div>
    </Container>
  );
};

export default InfoHome;
