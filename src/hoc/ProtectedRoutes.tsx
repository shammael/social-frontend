import { TRootState } from '@/utils/redux-toolkit';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { useAppSelector } from '@/utils/redux-toolkit/hooks';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { user } = useAppSelector((state: TRootState) => state.user);
  const { token } = useAppSelector((state: TRootState) => state.token);

  const dispatch = useDispatch();
  const location = useLocation();

  if (!user || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    (user || token) &&
    (location.pathname === '/login' || location.pathname === '/login/check')
  ) {
    // TODO: Usar mutation logout aquí

    dispatch(setToken(null));
    dispatch(setUser(null));
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user && token && location.pathname === '/login') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
