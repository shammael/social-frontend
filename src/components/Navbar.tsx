import Avatar from './Avatar';
import IconButton from './IconButton';
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
import Container from './Container';
import { Link } from 'react-router-dom';
import SearchRoundedButton from './SearchRoundedButton';
import Logo from './Logo';

const NavBar = () => {
  const { mode } = useSelector((state: TRootState) => state.mode);
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
      className=" bg-blue-400 w-full justify-between fixed top-0 z-50 py-1 px-4 sm:px-10 rounded-none h-14"
    >
      <div className="container m-auto w-full flex items-centers justify-between">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo className="font-bold text-xl dark:text-sky-400 text-white" />
          </Link>
          <SearchRoundedButton className="flex sm:hidden" />
          <SearchBar />
        </div>
        <div className="flex gap-2">
          <button
            className="bg-sky-700 hover:bg-sky-600 rounded-full h-8 w-8 flex justify-center items-center mt-1 drop-shadow-md"
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
          <IconButton
            dimensions={{ height: 'h-10', width: 'h-10' }}
            badge
            className="h-12 w-12"
          >
            <NotificationIcon
              size={25}
              color="#fff"
              style={{ marginLeft: '7px' }}
            />
          </IconButton>
          <IconButton
            dimensions={{ height: 'h-10', width: 'h-10' }}
            badge
            className="h-12 w-12"
          >
            <EnvelopeIcon
              size={25}
              color="#fff"
              style={{ marginLeft: '7px' }}
            />
          </IconButton>
          <Avatar
            cursor
            imgUrl="https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/300189805_5689864587730671_204287636568588692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yXh13MZU4csAX8V-kvO&_nc_ht=scontent.fmar7-1.fna&oh=00_AfA5_OwWDsityl2khl-Cln0EK4C2XcfxeaAtaFFbsy5BTw&oe=64141CAE"
          />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
