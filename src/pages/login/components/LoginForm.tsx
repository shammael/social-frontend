import Divider from '@/components/Divider';
import { Link, Navigate } from 'react-router-dom';
import Input from '@/components/Input';
import useLogin from '@/pages/login/hooks/useLogin';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../context/login.context';

const LoginForm = () => {
  const {
    handleBlur,
    handleSubmit,
    loginErrors,
    touched,
    handleChange,
    isSubmitting,
    loading,
    values,
    data,
  } = useLogin();
  const dispatch = useDispatch();
  const { setError } = useContext(LoginContext);

  useEffect(() => {
    if (data?.login.__typename === 'BadRequestError') {
      setError({
        message: data.login.message,
        messages: data.login.messages as {
          message: string;
          field: string;
        }[],
      });
    }
  }, [data, setError]);

  if (data?.login.__typename === 'LoginData') {
    dispatch(setUser(data.login?.user!));
    dispatch(setToken(data.login?.token!));
    return <Navigate to="/" replace={true} />;
  }

  if (data?.login.__typename === 'BadRequestError') {
    return <Navigate to="/login/check" replace={true} />;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="flex flex-col gap-4 bg-white p-3  w-full max-w-md rounded-md lg:min-w-[350px]"
    >
      <Input
        className={
          loginErrors!.email && touched.email ? 'border-1 border-red-300 ' : ''
        }
        type="email"
        value={values.email}
        placeholder="Email"
        id="email"
        onBlur={handleBlur}
        onChange={handleChange}
        error={loginErrors!.email && touched.email ? loginErrors!.email : null}
      />

      <Input
        className={
          loginErrors!.password && touched.password
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
          loginErrors!.password && touched.password
            ? loginErrors!.password
            : null
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
      <Divider />
      <button
        disabled={isSubmitting && loading}
        className="bg-green-500 disabled:bg-gray-300 py-2 rounded-md text-white text-lg font-medium max-w-sm m-auto p-5"
      >
        Create an account
      </button>
    </form>
  );
};

export default LoginForm;
