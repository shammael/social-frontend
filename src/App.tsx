import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/redux-toolkit';
import LoginProvider from './pages/login/context/login.provider';
import { Suspense, lazy } from 'react';
import InitLoading from './components/InitLoading';

const MainLayout = lazy(() => import('./layouts/main.layout'));
const LoginPage = lazy(() => import('./pages/login'));
const LoginCheckPage = lazy(() => import('./pages/login/pages/LoginCheckPage'));
const ProtectedRoutes = lazy(() => import('./hoc/ProtectedRoutes'));
const ContactPage = lazy(() => import('./pages/contact'));
const HomePage = lazy(() => import('./pages/homepage/home'));
const ProfilePage = lazy(() => import('./pages/profile'));
const EmailConfirmPage = lazy(() => import('./pages/confirmEmail'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoutes />}>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/check" element={<LoginCheckPage />} />
      <Route path="/register/confirmemail" element={<EmailConfirmPage />} />
    </>
  )
);

function App() {
  return (
    <Suspense fallback={<InitLoading />}>
      <Provider store={store}>
        <LoginProvider>
          <RouterProvider router={router} />
        </LoginProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
