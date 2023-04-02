import Divider from '../Divider';
import Input from './Input';
import Header from './Header';
import Spacer from '../Spacer';
import { Form, Link } from 'react-router-dom';
// import useRegister from './hooks/useRegister';
import CustomDatePicker from '../CustomDatePicker';
import { Field, Formik } from 'formik';
import { Gender, useRegisterMutation } from '@/graphql/generated/types';
import { GraphQLError } from 'graphql';

interface Props {
  onClose: () => void;
}

const Register = ({ onClose }: Props) => {
  const [register, { loading, data, error }] = useRegisterMutation();

  if (error) {
    alert(error.message);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        birthDate: new Date().toString(),
        gender: 'Male',
      }}
      onSubmit={(values, actions) => {
        try {
          register({
            variables: {
              input: {
                birthDate: new Date(values.birthDate).getTime(),
                email: values.email,
                firstName: values.firstName,
                gender: values.gender as Gender,
                lastName: values.lastName,
                password: values.password,
              },
            },
          });
        } catch (error) {
          if (error instanceof GraphQLError) {
            alert(error.message);
          }
        }
      }}
    >
      {({ errors, values, handleBlur, handleChange, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg flex flex-col p-4 shadow-md max-w-lg"
        >
          <Header onClose={() => onClose()} />
          <Divider />
          <Spacer />
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <Input
                name="firstName"
                placeholder="First name"
                type="text"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  errors!.firstName && errors.firstName
                    ? errors.firstName
                    : undefined
                }
              />
              <Input
                name="lastName"
                className="h-12 w-full border-2 bg-neutral-100 outline-blue-400 rounded-md px-2"
                placeholder="Last name"
                type="text"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  errors!.lastName && errors.lastName
                    ? errors.lastName
                    : undefined
                }
              />
            </div>
            <Input
              name="email"
              className="h-12 w-full border-2 bg-neutral-100 outline-blue-400 rounded-md px-2"
              placeholder="Type your email"
              type="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors!.email && errors.email ? errors.email : undefined}
            />
            <Input
              name="password"
              className="h-12 w-full border-2 bg-neutral-100 outline-blue-400 rounded-md px-2"
              placeholder="Type your password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                errors!.password && errors.password
                  ? errors.password
                  : undefined
              }
            />
            <Spacer />
            <section className="text-slate-500 font-semibold">
              <h3>Date of birth</h3>
              <Field
                name="birthDate"
                as={CustomDatePicker}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </section>
            <section className="text-slate-500 font-semibold">
              <h3>Gender</h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <input
                      onChange={handleChange}
                      id="male"
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      onChange={handleChange}
                      id="female"
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                {errors.gender && errors.gender ? (
                  <span className="text-red-500 text-sm">{errors.gender}</span>
                ) : null}
              </div>
            </section>
            <section>
              <p className="text-xs leading-5">
                People who use our service may have uploaded your contact
                information to Facebook.{' '}
                <Link to="#" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </p>
            </section>

            <section>
              <p className="text-xs leading-5">
                By clicking Sign Up, you agree to our{' '}
                <Link to="#" className="text-blue-600 hover:underline">
                  Terms
                </Link>
                ,{' '}
                <Link to="#" className="text-blue-600 hover:underline">
                  Privacy and Policy
                </Link>{' '}
                and
                <Link to="#" className="text-blue-600 hover:underline">
                  {''}Cookies Policy
                </Link>
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </section>
          </div>
          <input
            type="submit"
            className="bg-green-500 disabled:bg-gray-300 py-2 rounded-md text-white text-xl font-medium w-full max-w-[250px] m-auto p-5 cursor-pointer px-8 mt-4"
            value="Sign Up"
          />
        </Form>
      )}
    </Formik>
  );
};

export default Register;
