import Logo from './Logo';

const InitLoading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-2">
      <Logo className="text-5xl font-bold text-[#0080FB]" />
      <img className="w-[120px] h-[60px]" src="/assets/img/loading.svg" />
    </div>
  );
};

export default InitLoading;
