import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email("It's not a valid email").required(),
  password: yup.string().min(6).required(),
});

export default loginSchema;
