import Avatar from '../Avatar';
import IconButton from '../IconButton';
import SearchBar from './SearchBar';
import {
  HiOutlineBell as NotificationIcon,
  HiOutlineEnvelope as EnvelopeIcon,
  HiOutlineMoon as MoonIcon,
  HiOutlineSun as SunIcon,
} from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/utils/redux-toolkit';
import { setMode } from '@/utils/redux-toolkit/features/mode.slice';
import { useEffect } from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import SearchRoundedButton from './SearchRoundedButton';
import Logo from '../Logo';
import MenuButton from './MenuButton';
import IconButtonWrapper from '../IconButtonWrapper';
import { GoPlus } from 'react-icons/go';
import { BsMessenger } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

// TODO: Hay que crear un context para navbar

const NavBar = () => {
  const { mode } = useSelector((state: TRootState) => state.mode);
  const { user } = useSelector((state: TRootState) => state.user);
  const { token } = useSelector((state: TRootState) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.querySelector('html');
    if (mode === 'dark') {
      element?.classList.add('dark');
    } else {
      element?.classList.remove('dark');
    }
  }, [mode]);
  return (
    <Container
      orientation="horizontal"
      className=" bg-white w-full justify-between fixed top-0 z-50 py-1 px-4 sm:px-10 rounded-none h-14"
    >
      <div className="container m-auto w-full flex items-centers justify-between">
        <div className="flex justify-between items-center gap-4">
          <Link to="/">
            <Logo className="font-bold text-2xl text-sky-400" />
          </Link>
          <div className="flex gap-1">
            <IconButtonWrapper className="flex justify-center items-center">
              <BiSearch size={20} className="text-slate-500" />
            </IconButtonWrapper>
            {/* <SearchRoundedButton className="flex sm:hidden" /> */}
            <MenuButton />
          </div>
          <SearchBar className="hidden sm:block" />
        </div>
        <div className="flex gap-2">
          <button
            className="bg-sky-700 hover:bg-sky-600 rounded-full h-8 w-8 justify-center items-center mt-1 drop-shadow-md hidden"
            onClick={() => {
              dispatch(setMode());
            }}
          >
            {mode === 'light' ? (
              <SunIcon size={20} color="#fff" />
            ) : (
              <MoonIcon size={20} color="#fff" />
            )}
          </button>
          <IconButtonWrapper className="flex justify-center items-center">
            <GoPlus size={20} className="text-slate-500" />
          </IconButtonWrapper>
          <IconButtonWrapper
            className="flex justify-center items-center"
            badgeNumber={5}
          >
            <BsMessenger size={20} className="text-slate-500" />
          </IconButtonWrapper>
          <IconButtonWrapper
            className="flex justify-center items-center"
            badgeNumber={2}
          >
            <FaBell size={20} className="text-slate-500" />
          </IconButtonWrapper>

          <Avatar
            cursor
            imgUrl={
              user?.picturePath
                ? user?.picturePath
                : 'https://storage.googleapis.com/media.clinicavisualyauditiva.com/images/2019/11/211fd983-default-user-image.png'
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
