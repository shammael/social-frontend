import { IError } from './login.context';

interface ILoginState {
  error: IError | null;
}

type ActionType = { type: 'Login - SetError'; payload: IError | null };

const loginReducer = (state: ILoginState, action: ActionType): ILoginState => {
  switch (action.type) {
    case 'Login - SetError':
      return { ...state, error: action.payload };
  }
};

export default loginReducer;
