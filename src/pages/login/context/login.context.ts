import { createContext } from 'react';

export interface IError {
  message: string;
  messages: { message: string; field: string }[];
}

interface Props {
  error: IError | null;

  setError: (error: IError | null) => void;
}

const LoginContext = createContext({} as Props);

export default LoginContext;
