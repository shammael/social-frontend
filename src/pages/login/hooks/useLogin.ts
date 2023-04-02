import { useLoginMutation } from '@/graphql/generated/types';
import LoginContext from '@/pages/login/context/login.context';
import loginSchema from '@/pages/login/schema/login.schema';
import { setToken } from '@/utils/redux-toolkit/features/token.slice';
import { setUser } from '@/utils/redux-toolkit/features/user.slice';
import { ApolloError } from '@apollo/client';
import { replace, useFormik } from 'formik';
import { GraphQLError } from 'graphql';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useLogin = () => {
  const { setError } = useContext(LoginContext);
  const dispatch = useDispatch();

  const [login, { loading, data, error }] = useLoginMutation();

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
      login({
        variables: {
          input: {
            email: values.email,
            password: values.password,
          },
        },
      })
        .then((data) => console.log(data))
        .catch((err: unknown) => {
          console.log({ err });
          if (err instanceof ApolloError) {
            return err.graphQLErrors.map((er) => {
              console.log({ er });
              const field = er.extensions.field as string;
              console.log({ field });
              setErrors({ [field.toLowerCase()]: err.message });
            });
          }
        });
    },
  });

  return {
    handleSubmit,
    handleBlur,
    loading,
    touched,
    isSubmitting,
    formErrors: errors,
    handleChange,
    values,
    data,
    loginError: error,
  };
};

export default useLogin;
