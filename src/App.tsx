import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import ContactPage from './pages/contact';
import HomePage from './pages/homepage/home';
import MainLayout from './layouts/main.layout';
import ProfilePage from './pages/profile';
import { Provider } from 'react-redux';
import { store } from './utils/redux-toolkit';
import { useAppSelector } from './utils/redux-toolkit/hooks';
import LoginPage from './pages/login';
import LoginCheckPage from './pages/login/pages/LoginCheckPage';
import LoginProvider from './pages/login/context/login.provider';
import ProtectedRoutes from './hoc/ProtectedRoutes';

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
    </>
  )
);

function App() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </Provider>
  );
}

export default App;
