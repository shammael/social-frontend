import Logo from '@/components/Logo';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import LoginContext from '../context/login.context';
import CheckLoginForm from './components/CheckLoginForm';

const LoginCheckPage = () => {
  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center flex-col gap-4 px-4">
      <Logo className="text-sky-400 font-bold text-4xl" />
      <CheckLoginForm />
    </div>
  );
};

export default LoginCheckPage;
