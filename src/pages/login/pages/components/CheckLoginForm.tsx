import Input from '@/components/Input';
import useLogin from '@/pages/login/hooks/useLogin';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import LoginContext from '../../context/login.context';

const CheckLoginForm = () => {
  const { error, setError } = useContext(LoginContext);
  const dispatch = useDispatch();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    loading,
    touched,
    values,
    data,
    formErrors,
  } = useLogin();

  if (data?.login) {
    dispatch(setUser(data.login?.user!));
    dispatch(setToken(data.login?.token!));
    return <Navigate to="/" replace={true} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md shadow-lg flex flex-col p-4 gap-3 w-full max-w-md"
    >
      <h2 className="my-4 w-full text-center text-slate-500 text-xl font-semibold">
        Login to Social
      </h2>
      <Input
        className={formErrors!.email ? 'border-1 border-red-300 ' : ''}
        type="email"
        value={values.email}
        placeholder="Email"
        id="email"
        onBlur={handleBlur}
        onChange={handleChange}
        error={formErrors!.email ? formErrors!.email : null}
      />

      <Input
        className={
          formErrors!.password && touched.password
            ? 'border-1 border-red-300 '
            : ''
        }
        type="password"
        id="password"
        onChange={handleChange}
        value={values.password}
        placeholder="Password"
        onBlur={handleBlur}
        error={
          formErrors!.password && touched.password ? formErrors!.password : null
        }
      />

      <Input
        className="cursor-pointer disabled:bg-gray-300 bg-sky-500 py-2 rounded-md text-white text-lg font-medium"
        type="submit"
        disabled={isSubmitting && loading}
        value="Login"
      />

      <Link
        to="/"
        className="text-blue-400 text-sm hover:underline text-center"
      >
        Did you forget your password ?
      </Link>
    </form>
  );
};

export default CheckLoginForm;
