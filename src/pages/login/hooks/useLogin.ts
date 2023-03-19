import { useLoginMutation } from '@/graphql/generated/types';
import LoginContext from '@/pages/login/context/login.context';
import loginSchema from '@/pages/login/schema/login.schema';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { replace, useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useLogin = () => {
  // const { setError } = useContext(LoginContext);
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, data, error }] = useLoginMutation({
    variables: {
      input: {
        email: email,
        password: password,
      },
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    setErrors,
    values,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      login();
    },
  });

  useEffect(() => {
    setEmail(values.email);
  }, [values.email]);

  useEffect(() => {
    setPassword(values.password);
  }, [values.password]);

  // useEffect(() => {
  //   setLoginErrors({
  //     email: errors.email
  //   });
  // }, [loginErrors]);

  return {
    handleSubmit,
    handleBlur,
    loading,
    touched,
    isSubmitting,
    loginErrors: errors,
    handleChange,
    values,
    data,
    setErrors,
  };
};

export default useLogin;
