import Divider from '@/components/Divider';
import { Link, Navigate } from 'react-router-dom';
import Input from '@/components/Input';
import useLogin from '@/pages/login/hooks/useLogin';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../context/login.context';

interface Props {
  onRegister: () => void;
}

const LoginForm = ({ onRegister }: Props) => {
  const {
    handleBlur,
    handleSubmit,
    formErrors,
    touched,
    handleChange,
    isSubmitting,
    loading,
    values,
    data,
    loginError,
  } = useLogin();

  const dispatch = useDispatch();
  const { error } = useContext(LoginContext);

  if (loginError?.graphQLErrors.length! > 0) {
    return <Navigate to="/login/check" replace={true} />;
  }

  if (data?.login) {
    dispatch(setUser(data.login?.user!));
    dispatch(setToken(data.login?.token!));
    return <Navigate to="/" replace={true} />;
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
          formErrors!.email && touched.email ? 'border-1 border-red-300 ' : ''
        }
        type="email"
        value={values.email}
        placeholder="Email"
        id="email"
        onBlur={handleBlur}
        onChange={handleChange}
        error={formErrors!.email && touched.email ? formErrors!.email : null}
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
      <Divider />
      <button
        onClick={() => {
          onRegister();
        }}
        type="button"
        disabled={isSubmitting && loading}
        className="bg-green-500 disabled:bg-gray-300 py-2 rounded-md text-white text-lg font-medium max-w-sm m-auto p-5"
      >
        Create an account
      </button>
    </form>
  );
};

export default LoginForm;
