import { PropsWithChildren, useReducer } from 'react';
import LoginContext, { IError } from './login.context';
import loginReducer from './login.reducer';

const initialState: { error: IError | null } = {
  error: null,
};

const LoginProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const setError = (error: IError | null) => {
    dispatch({ type: 'Login - SetError', payload: error });
  };

  return (
    <LoginContext.Provider value={{ ...state, setError }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
