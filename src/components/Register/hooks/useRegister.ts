import { Gender, useRegisterMutation } from '@/graphql/generated/types';
import { useFormik } from 'formik';
import registerSchema from '../schemas/RegisterSchema';

const useRegister = () => {
  const [register, { loading, data, error }] = useRegisterMutation();
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    values,
  } = useFormik<{
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    birthDate: string;
    gender: 'male' | 'female' | undefined;
  }>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      birthDate: new Date().toString(),
      gender: undefined,
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      console.log({ values });
      register({
        variables: {
          input: {
            birthDate: new Date(values.birthDate),
            email: values.email,
            firstName: values.firstName,
            gender: values.gender as Gender,
            lastName: values.lastName,
            password: values.password,
          },
        },
      });
    },
  });

  return {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    formErrors: errors,
    touched,
    isSubmitting,
    loading,
    data,
    registerError: error,
  };
};

export default useRegister;
