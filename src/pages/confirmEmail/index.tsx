import CodeBoxVerifation from './CodeBox';
import Header from './header';

const ConfirmEmailPage = () => {
  const email = 'shammamnd2015@gmail.com';
  return (
    <div className="w-screen h-screen bg-slate-300 relative">
      <Header />
      <div className="flex w-full h-full justify-center items-center absolute top-0">
        <CodeBoxVerifation emailAddress={email} />
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
