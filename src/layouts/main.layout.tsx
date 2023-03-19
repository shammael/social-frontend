import NavBar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="dark:bg-[#0A0A0A] bg-neutral-100 pt-16">
      <NavBar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
