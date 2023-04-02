import * as yup from 'yup';

const registerSchema = yup.object().shape({
  email: yup.string().email("It's not a valid email").required(),
  password: yup.string().min(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  gender: yup.mixed().oneOf(['male', 'female']).required(),
  birthDate: yup.date().min(new Date(1900, 0, 1)).max(new Date()).required(),
});

export default registerSchema;
