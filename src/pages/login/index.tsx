import Logo from '@/components/Logo';
import Modal from '@/components/modal';
import Register from '@/components/Register';
import Spacer from '@/components/Spacer';
import { useState } from 'react';
import AddAccountCard from './components/AddAccoutCard';
import LoginCard from './components/LoginCard';
import LoginCardWrapper from './components/LoginCardWrapper';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  // const navigate = useNavigate();
  // const { error } = useContext(LoginContext);
  // if (error) {
  //   navigate('/login/check', { replace: true });
  // }
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="py-10 lg:py-4 h-fit lg:h-screen w-full lg:w-screen bg-slate-50">
        <div className="flex-col lg:flex-row flex justify-between w-full h-full m-auto gap-4 sm:max-w-4xl lg:m-auto px-3">
          <div className="flex flex-col justify-center w-full items-center lg:items-start">
            <Logo className="text-sky-400 font-bold text-3xl" />
            <p className="text-2xl font-medium text-slate-700">Last Sessions</p>
            <p className="text-lg font-medium text-slate-600">
              Click on your photo or add an account.
            </p>
            <div className="flex gap-4 mt-4 px-4 w-full justify-center">
              <LoginCardWrapper>
                <LoginCard />
              </LoginCardWrapper>
              <LoginCardWrapper>
                <AddAccountCard />
              </LoginCardWrapper>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <LoginForm onRegister={() => setIsModal(true)} />
            <Spacer />
            <p className="w-full text-center">
              <a href="#" className="font-bold">
                Create a page
              </a>{' '}
              for a celebrity, brand or bussiness
            </p>
          </div>
        </div>
      </div>
      {isModal && (
        <Modal>
          <Register onClose={() => setIsModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default LoginPage;
